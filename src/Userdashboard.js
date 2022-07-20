import Home from "./Home";
import Navbar from "./Navbar";
import './user_dashboard.css';
import Ticket from "./Ticket";
import Chat from "./Chat";
import {Route, Router, Routes,useNavigate} from "react-router-dom";
import { UserContext } from './userContext';
import { logoutUser } from './Magic';
import {useContext} from "react";



const Userdashboard=()=>{



       return(
        <>
        <Navbar />
    <div className="Container">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ticket" element={<Ticket/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/dashboard" element={<Userdashboard/>}/>
        </Routes>
    </div>
            </>
    )
}
 export default Userdashboard;
