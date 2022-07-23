import {Helmet} from "react-helmet";
import "./user_dashboard.css";
import { Magic } from 'magic-sdk';
import {useState} from "react";


function Home() {
const [data,setdata]=useState([]);
const [value,setValue]=useState();


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


       setdata(res_data)

       }
    Fetchbrand();

    return (


        <div className="user_dashboard">

            <Helmet>
                <title>SICS | Home</title>
                <link rel="icon" href="Logo.svg" type="image/svg"/>
            </Helmet>

            <div className="createticket_counter">
                <h6>15</h6>
                <h7>Tickets created</h7>

            </div>
            <div className="Ticketview_window">
                <h3>Your Tickets</h3>
                <ul>
                    {
                        data.map((item)=>
                            <button className="Ticketlist"  onClick={()=>{
                                setValue(item.description)
                            }} >{item.subject}<h4>{item.ticket_id}</h4>

                            </button>
                        )


                    }


                </ul>
            </div>
            <div className="openticket_counter">
                <h6>8</h6>
                <h7>Open Tickets</h7>
            </div>
            <div className="profile_window">
                <button className="new_ticket">+ NewTicket</button>
                <button className="Notification"></button>
                <button className="account"></button>

            </div>
            <div className="solvedticket_counter">
                <h6>4</h6>
                <h7>Solved Tickets</h7>

            </div>
            <div className="blankspace">
                <p>
                    {
                        value
                    }
                </p>

            </div>


        </div>
    )

}


export default Home;