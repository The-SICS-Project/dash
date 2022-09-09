import "./ticket.css";
import { Magic } from 'magic-sdk';
import {useState,useEffect} from "react";
import {useForm} from "react-hook-form";
import {Helmet} from "react-helmet";
import Navbar from "./Navbar";
import swal from "sweetalert";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Ticket() {
    const magic = new Magic('pk_live_AABC93231E65FC6F');
    const [brand,setBrand]=useState([]);
    const [image,setImage]=useState([])



    const {register, handleSubmit} = useForm();
    const onSubmit = async data => {
        setImage(data.files)
        let form = new FormData();
        form.append("brand", data.brand);
        form.append("category", data.category);
        form.append("model", data.model);
        form.append("subject", data.subject);
        form.append("description", data.description);



        for (var it of data.files){
            form.append("files",it)
        }

        for (var value of form.values()) {
            console.log(value);
        }

        const did_token=await magic.user.getIdToken();

        const options = {
            method: 'POST',
            headers: {

                Authorization: 'Bearer '+did_token,

            }
        };

        options.body = form;

      let res=await fetch('https://sics-9hq7p.ondigitalocean.app/tickets/create', options);

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
            <select  className="dropdown_product" {...register("model")}>
                <option value="" disabled selected hidden>Model</option>
                <option value="RMX550">RMX550</option>
                <option value="RMX750">RMX750</option>
                <option value="RMX950">RMX950</option>
                <option value="RMX580">RMX580</option>
            </select>
            <select  className="dropdown_model" {...register("category")}>
                <option value="" disabled selected hidden>Products</option>
                <option value="Refigerator">Refigerator</option>
                <option value="TV">TV</option>
                <option value="Radio">Radio</option>
                <option value="Phone">Phone</option>
                </select>
            <input className="fileselect" id="file" type="file" accept="image/x-png,image/gif,image/jpeg"  multiple {...register("files")}/>
            <label className="filelabel" for="file"><FontAwesomeIcon className="uploadicon" icon={faArrowUpFromBracket}/>&nbsp;&nbsp; Upload Images</label>
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