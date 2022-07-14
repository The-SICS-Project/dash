import Home from "./Home";
import Navbar from "./Navbar";
import './user_dashboard.css';
import Ticket from "./Ticket";

function Userdashboard() {
    let Component
    switch (window.location.pathname){
        case "/" :
        Component=<Home />
            break;
        case "/ticket":
            Component=<Ticket />
            break;
        // case "/chat":
        //     Component=<Ticket />
        //     break;
        // case "/logout":
        //     Component=<logout />
        //     break;
    }

    return(
        <>
        <Navbar />
    {Component}
            </>
    )
}
 export default Userdashboard
