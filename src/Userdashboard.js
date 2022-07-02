import {Helmet} from "react-helmet";
import "./user_dashboard.css";
import dashboardlogo from "./dashboardlogo.svg"
import servicerobot from "./servicerobot.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faClipboardList} from "@fortawesome/free-solid-svg-icons";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import ticketscreated from "./ticketscreated.svg";
import solvedticket from "./solvedticket.svg";
import openticket from "./openticket.svg";


function userdashboard(){
    return(


        <div className="user_dashboard">

            <Helmet>
                <title>SICS | Login</title>
                <link rel="icon" href="Logo.svg" type="image/svg"/>
            </Helmet>
            <div className={"searchbar"}>
                <input type="text"  placeholder="           Search for Tickets" />
                <button  className="searchbutton" ></button>

            </div>
            <div className="createticket_counter">

            </div>
            <div className="Ticketview_window">

            </div>
            <div className="openticket_counter">

            </div>
            <div className="profile_window">
                <button className="new_ticket">+ NewTicket</button>
                <button  className="Notification" ></button>
                <button  className="account" ></button>

            </div>
            <div className="solvedticket_counter">
                <h1>4</h1>
                <h2>Solved Tickets</h2>

            </div>
            <div className="blankspace">

            </div>

            <div className={"Navbar"}>

                <img className="Logo_dashboard" src={dashboardlogo} id={dashboardlogo} width="150" height="50"/>
                <div className="Tabs">
                <ul>
                    <button className="tablist" onClick="openCity(event, 'London')"><FontAwesomeIcon className="home" icon={faHome} />Home</button>
                    <button className="tablist" onClick="openCity(event, 'London')"><FontAwesomeIcon className="ticket" icon={faClipboardList} />Tickets</button>
                    <button className="tablist"onClick="openCity(event, 'London')"><FontAwesomeIcon className="chat" icon={faMessage}/>Chat</button>
                    <button className="tablist"onClick="openCity(event, 'London')"><FontAwesomeIcon className="logout" icon={faRightFromBracket} />Logout</button>
                </ul>
                </div>
                <div className="robot">
                <img className="service" src={servicerobot} id={servicerobot} width="500" height="120"/>
                    <button type="button" className="support">Contact Support</button>
                </div>
            </div>
        </div>
    )
}

export default userdashboard;