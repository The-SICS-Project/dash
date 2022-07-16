import Home from "./Home";
import Navbar from "./Navbar";
import './user_dashboard.css';
import Ticket from "./Ticket";
import Chat from "./Chat";
import {Route, Router, Routes} from "react-router-dom";


function Userdashboard() {
       return(
        <>
        <Navbar />
    <div className="Container">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ticket" element={<Ticket/>}/>
            <Route path="/chat" element={<Chat/>}/>
        </Routes>
    </div>
            </>
    )
}
 export default Userdashboard
