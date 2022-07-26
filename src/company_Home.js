import {Helmet} from "react-helmet";
import "./user_dashboard.css";
import { Magic } from 'magic-sdk';
import {useState} from "react";


function Companyhome() {
    const [data,setdata]=useState([]);
    const [sub,setSub]=useState()
    const[resolved,setResolved]=useState()
    const[reject,setReject]=useState()

const[ticketid,setTicketid]=useState()
    const [model,setModel]=useState()
    const[warranty,setWarranty]=useState()
    const [description,setDescription]=useState();

    const Fetchdetails = (des,subj,mod,war,id) => {
        const warran=war.toString()
setTicketid(id)

        setDescription(des);
        setWarranty(warran)
        setSub(subj)
        setModel(mod)





    }
const Ticketresolved = async () => {
    const magic = new Magic('pk_live_AABC93231E65FC6F');
    const did_token = await magic.user.getIdToken();
        setResolved(true);
        setReject(false);

    const ticketdata = {
        "resolved": resolved,
        "cancelled": reject,
        "ticket_id": ticketid
    }
    console.log(JSON.stringify(ticketdata))
    console.log(ticketid)
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer '+did_token,
            'content-type': 'application/json'
        },
        body: JSON.stringify(ticketdata)

    };
   const response=await fetch('https://sics-backend-ffyd6.ondigitalocean.app/tickets/update', options);
   if(response.status===200){
       console.log("Sucess")

   }
   else{
       console.log("failed")
   }

}
const Ticketrejected = async () => {
    const magic = new Magic('pk_live_AABC93231E65FC6F');
    const did_token = await magic.user.getIdToken();
        setResolved(false)
    setReject(true)
    const ticketdata = {
        "resolved": resolved,
        "cancelled": reject,
        "ticket_id": ticketid
    }
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer '+did_token,
            'content-type': 'application/json'
        },
        body: JSON.stringify(ticketdata)
    };
        console.log(JSON.stringify(ticketdata))
    const response=await fetch('https://sics-backend-ffyd6.ondigitalocean.app/tickets/update', options);
    if(response.status===200){
        console.log("Sucess")

    }
    else{
        console.log("failed")
    }



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

        let res = await fetch('https://sics-backend-ffyd6.ondigitalocean.app/tickets/', options);
        const res_data= await res.json()

if(res.status===200) {
    setdata(res_data)
}
    }
    Fetchbrand();

    return (


        <div className="company_dashboard">

            <Helmet>
                <title>SICS | Home</title>
                <link rel="icon" href="Logo.svg" type="image/svg"/>
            </Helmet>


            <div className="Ticketview_window">
                <h3>Your Tickets</h3>
                <ul>
                    {data.length > 0 ?
                        data.map((item)=>
                            <button className="Ticketlist"  onClick={()=>{
                                Fetchdetails(item.description,item.subject,item.model,item.under_warranty,item.ticket_id)
                            }} >{item.subject}<h4>{item.ticket_id}</h4><br/>
                                {item.resolved ?<h31>Resolved</h31>:<h31>Not resolved</h31>}
                                {item.cancelled ?<h32>Rejected</h32>:<h32> </h32>}


                            </button>
                        ) : <p>No tickets</p>


                    }


                </ul>
            </div>

            <div className="blankspace">

                <h20>Ticket Details</h20>
                <p> Sub: {sub}</p>
                <p> product category: {model}</p>
                <p> product warranty: {warranty}</p>
                <p> complaint: {description} </p>
                <div className="msgbox">
                    <p20></p20>
                </div>
                <div className="Responsebox">
                    <input className="box" type="text" placeholder="Type a message"/>
                    <div className="buttonlist">

                        <button className="Resolved" onClick={()=>{Ticketresolved()

                        }}>Resolve </button>
                            <button className="Reject" onClick={()=>{Ticketrejected()

                            }}>Reject</button>
                            <button className="msgsend">Send</button>

                    </div>

                </div>

            </div>


        </div>
    )

}


export default Companyhome;