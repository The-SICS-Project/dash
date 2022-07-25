import "./ticket.css";
import { Magic } from 'magic-sdk';
import {useState,useEffect} from "react";
import {useForm} from "react-hook-form";
import {Helmet} from "react-helmet";
import Navbar from "./Navbar";
import swal from "sweetalert";

function Ticket() {
    const magic = new Magic('pk_live_AABC93231E65FC6F');
    const [brand,setBrand]=useState([]);
    useEffect(()=>{
        const getBrand=async()=>{
            let res=await fetch();
            const getBran=res.json();
            setBrand(await getBran);
        }
        getBrand();
    },[]);


    const {register, handleSubmit} = useForm();
    const onSubmit = async data => {console.log(JSON.stringify(data));

        console.log(JSON.stringify(data))
        const did_token=await magic.user.getIdToken();
console.log(did_token);


        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization: 'Bearer '+did_token

            },
            body:JSON.stringify(data)

        };

      let res= await fetch('https://sics-backend-ffyd6.ondigitalocean.app/tickets/create', options);
      console.log(res)
        if(res.status==200){
            swal({
                title: "Thank you!",
                text: "Ticket created Successfully!!",
                icon: "success",
                button: "Ok",
            });
        }
        else{
            swal ({
                title: "OOPS!",
                text: "Failed to create ticket!!",
                icon: "error",
                button: "Ok!",

            })
        }


    };
    return(
        <>
        <Navbar />

    <div className="ticketform">
        <Helmet>
            <title>SICS | Tickets</title>
            <link rel="icon" href="Logo.svg" type="image/svg"/>
        </Helmet>
        <h3>Create Ticket</h3>
        <form onSubmit={handleSubmit(onSubmit)}>


            <select  className="dropdown_brand" {...register("brand")}>
                <option value="" disabled selected hidden>Brand</option>
                <option value="sony">sony</option>
                <option value="Nuanced Computing">Nuanced Computing</option>

                {
                    brand.map((brandget)=>(
                        <option key={brandget.companyid} value={brandget.comapnyid}>{brandget.company} </option>
                    ))
                }

            </select>
            <select  className="dropdown_product" {...register("product")}>
                <option value="" disabled selected hidden>Product</option>
                <option value="RMX550">RMX550</option>
                <option value="RMX750">RMX750</option>
                <option value="RMX950">RMX950</option>
                <option value="RMX580">RMX580</option>
            </select>
            <select  className="dropdown_model" {...register("model")}>
                <option value="" disabled selected hidden>Model no</option>
                <option value="model">Refigerator</option>
                <option value="saab">TV</option>
                <option value="mercedes">Radio</option>
                <option value="audi">Phone</option>
                </select>
            <input className="brief" type="text" placeholder="Brief" {...register("subject")}
                   required/>
            <input className="description" type="text" placeholder="Description" {...register("description")}
                   required/>
            <label className="ticketcontainer">Under Warranty
                <input type="checkbox" {...register("under_warranty")}/>
                    <span className="ticketcheckmark" ></span>
            </label>
            <button className="Submit" type="submit">Create Ticket</button>
            <br></br>
        </form>

    </div>
        </>
    )};


export default  Ticket;