import dashboardlogo from "./dashboardlogo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faClipboardList, faMessage, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import servicerobot from "./servicerobot.svg";
import './user_dashboard.css';
import {Link, useMatch, useNavigate, useResolvedPath} from "react-router-dom";
import {UserContext} from "./userContext";
import {logoutUser} from "./Magic";
import {useContext, useState} from "react";
import { Magic } from 'magic-sdk';



const Companynavbar=()=> {
    const [name,setName]=useState()
    const magic = new Magic('pk_live_AABC93231E65FC6F');

    const[openCounter,setopenCounter]=useState();
    const[resolvedcounter,setresolvedcounter]=useState();
    const GetName = async() => {
        const did_token=await magic.user.getIdToken();
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer '+did_token,
                'content-type': 'application/json'
            }

        };

        let res= await fetch('https://sics-backend-ffyd6.ondigitalocean.app/account/hello', options);
        if(res.status===200) {
            const data = await  res.json();
            console.log(data.first_name)
            setName(data.first_name)
        }
        const Ticketoptions = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer '+did_token,
                'content-type': 'application/json'
            },

        };

        let response=await fetch('https://sics-backend-ffyd6.ondigitalocean.app/tickets/stats', Ticketoptions)
        if(response.status===200){
            const ticketdetails=await response.json()

            setopenCounter(ticketdetails.open_tickets)
            setresolvedcounter(ticketdetails.resolved_tickets)

        }
        else
        {
            console.log("error fetching ticket counters");
        }


    }
    GetName();

    const {email} = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogOut = async () => {
        try {
            await logoutUser();
            navigate('/', {replace: true});
        } catch (error) {
            console.error(error);
        }
    }


    return(
        <div>
            <div className={"searchbar"}>
                <input type="text" placeholder="           Search for Tickets"/>
                <button className="searchbutton"></button>

            </div>
            <div className="profile_window">
                <button className="new_ticket" >
                <CustomLink to="/companydashboard">Respond</CustomLink>
            </button>
                <p className="Notification">Hello,</p>
                <p className="account">{name}</p>
            </div>
            <div className="teammembers">
                <h6>1</h6>
                <h7>Team Members</h7>

            </div>
            <div className="openticket_counter">
                <h6>{openCounter}</h6>
                <h7>Open Tickets</h7>
            </div>
            <div className="solvedticket_counter">
                <h6>{resolvedcounter}</h6>
                <h7>Solved Tickets</h7>

            </div>
            <div className="blankspace">

            </div>
            <div className={"Navbar"} >

                <img className="Logo_dashboard" src={dashboardlogo} id={dashboardlogo} width="150" height="50"/>
                <div className="Tabs">
                    <ul>
                        <button >
                            <FontAwesomeIcon className="home" icon={faHome}/><CustomLink to="/companydashboard">Home</CustomLink>
                        </button>
                        <button  ><FontAwesomeIcon
                            className="ticket" icon={faClipboardList}/><CustomLink to="/companydashboard">Tickets</CustomLink>
                        </button>
                        <button  ><FontAwesomeIcon
                            className="chat" icon={faMessage}/><CustomLink to="/companydashboard">Chat</CustomLink>
                        </button>
                        <button onClick={handleLogOut} ><FontAwesomeIcon
                            className="logout"  icon={faRightFromBracket}/>Logout
                        </button>

                    </ul>

                </div>



                <div className="robot">
                    <img className="service" src={servicerobot} id={servicerobot} width="500" height="120"/>
                    <button type="button" className="support">Contact Support</button>
                </div>

            </div>
        </div>


    )
    function CustomLink({to,children,...props}) {
        const resolvedPath=useResolvedPath(to)
        let path=""
        const isActive=useMatch({path:resolvedPath.pathname,end:true})
        return(
            <li className={path ===to ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }}
export default Companynavbar ;