import {Helmet} from "react-helmet";
import "./user_dashboard.css";
import { Magic } from 'magic-sdk';
import {useState} from "react";



function Home() {
const [data,setdata]=useState([]);
const [sub,setSub]=useState()
const [imag,setImg]=useState([])


const [model,setModel]=useState()
 const[warranty,setWarranty]=useState()
const [description,setDescription]=useState();

    const Fetchdetails = (des, subj, mod, war, date) => {
        const warran = war.toString()


        setDescription(des);
        setWarranty(warran)
        setSub(subj)
        setModel(mod)


    }

    const Fetchbrand = async data => {
        const magic = new Magic('pk_live_AABC93231E65FC6F');
        const did_token = await magic.user.getIdToken();
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + did_token
            }
        };

    let res = await fetch('https://sics-9hq7p.ondigitalocean.app/tickets/', options);
    const res_data = await res.json()
if(res.status===200){
    setdata(res_data)
}
else{

}

    }
    Fetchbrand();

    return (


        <div className="user_dashboard">

            <Helmet>
                <title>SICS | Home</title>
                <link rel="icon" href="Logo.svg" type="image/svg"/>
            </Helmet>


            <div className="Ticketview_window">
                <h3>Your Tickets</h3>
                <ul>
                    {data.length > 0 ?
                        data.map((item)=>
                            <button className="Ticketlist"  onClick={()=>{setImg(item.file_names)
                                console.log(item.file_names)
                                Fetchdetails(item.description,item.subject,item.model,item.under_warranty,item.date_created)
                            }} >{item.subject}<h4>{item.ticket_id}</h4><br/>
                                {item.resolved ?<h31>Resolved</h31>:<h31>Not resolved</h31>}
                                {item.cancelled ?<h32>Rejected</h32>:<h32> </h32>}

                            </button>
                        ) : <p16>No Tickets Created</p16>


                    }


                </ul>
            </div>


            <div className="blankspace">
                <h20>Ticket Details</h20>
                <p> Sub: {sub}</p>
                <p> product model: {model}</p>
                <p> product warranty: {warranty}</p>
                <p> complaint: {description} </p>
                {imag.length>0?
                    imag.map((link)=>
                        <img class="complaintimages" src={link}/>

                            ):<p45>No images</p45>
                            }


            </div>


        </div>
    )

}


export default Home;