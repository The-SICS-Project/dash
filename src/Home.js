import {Helmet} from "react-helmet";
import "./user_dashboard.css";
import {useState} from "react";
import dashboardlogo from "./dashboardlogo.svg"
import servicerobot from "./servicerobot.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faClipboardList, faMessage, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter as router ,Switch ,Route} from "react-router-dom";



function Home() {

    return (


        <div className="user_dashboard" >

            <Helmet>
                <title>SICS | Login</title>
                <link rel="icon" href="Logo.svg" type="image/svg"/>
            </Helmet>
            <div className={"searchbar"}>
                <input type="text" placeholder="           Search for Tickets"/>
                <button className="searchbutton"></button>

            </div>
            <div className="createticket_counter">
                <h1>15</h1>
                <h2>Tickets created</h2>

            </div>
            <div className="Ticketview_window">
                <h3>Your Tickets</h3>
                <ul>
                    <button className="Ticketlist" ><h4>#125637</h4>I think my
                        refrigerator is eating my food
                    </button>
                    <button className="Ticketlist" ><h4>#195522</h4>Tv is not turning
                        on
                    </button>
                    <button className="Ticketlist" ><h4>#135535</h4>Washing machine
                        drum not turning
                    </button>
                    <button className="Ticketlist" ><h4>#166515</h4>Mobile speaker
                        not working
                    </button>
                </ul>
            </div>
            <div className="openticket_counter">
                <h1>8</h1>
                <h2>Open Tickets</h2>
            </div>
            <div className="profile_window">
                <button className="new_ticket">+ NewTicket</button>
                <button className="Notification"></button>
                <button className="account"></button>

            </div>
            <div className="solvedticket_counter">
                <h1>4</h1>
                <h2>Solved Tickets</h2>

            </div>
            <div className="blankspace">

            </div>

            <div className={"Navbar"} >

                <img className="Logo_dashboard" src={dashboardlogo} id={dashboardlogo} width="150" height="50"/>
                <div className="Tabs">
                    <ul>
                        <button >
                            <FontAwesomeIcon className="home" icon={faHome}/><a href="/">Home</a>
                        </button>
                        <button  ><FontAwesomeIcon
                            className="ticket" icon={faClipboardList}/><a href="/ticket">Tickets</a>
                        </button>
                        <button  ><FontAwesomeIcon
                            className="chat" icon={faMessage}/><a href="/chat">Chat</a>
                        </button>
                        <button  ><FontAwesomeIcon
                            className="logout" icon={faRightFromBracket}/><a href="/logout">Logout</a>
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

}


export default Home;