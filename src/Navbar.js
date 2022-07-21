import dashboardlogo from "./dashboardlogo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faClipboardList, faMessage, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import servicerobot from "./servicerobot.svg";
import './user_dashboard.css';
import {Link, useMatch, useNavigate, useResolvedPath} from "react-router-dom";
import {UserContext} from "./userContext";
import {logoutUser} from "./Magic";
import {useContext} from "react";



const Navbar=()=> {
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
            <button className="new_ticket">+ NewTicket</button>
            <button className="Notification"></button>
            <button className="account"></button>

        </div>
        <div className="createticket_counter">
            <h6>15</h6>
            <h6>Tickets created</h6>

        </div>
        <div className="openticket_counter">
            <h7>8</h7>
            <h7>Open Tickets</h7>
        </div>
        <div className="solvedticket_counter">
            <h8>4</h8>
            <h8>Solved Tickets</h8>

        </div>
        <div className="blankspace">

        </div>
<div className={"Navbar"} >

    <img className="Logo_dashboard" src={dashboardlogo} id={dashboardlogo} width="150" height="50"/>
    <div className="Tabs">
        <ul>
            <button >
                <FontAwesomeIcon className="home" icon={faHome}/><CustomLink to="/">Home</CustomLink>
            </button>
            <button  ><FontAwesomeIcon
                className="ticket" icon={faClipboardList}/><CustomLink to="/dashboard/ticket">Tickets</CustomLink>
            </button>
            <button  ><FontAwesomeIcon
                className="chat" icon={faMessage}/><CustomLink to="/dashboard/chat">Chat</CustomLink>
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
export default Navbar;
