import Home from "./Home";
import Navbar from "./Navbar";
import './user_dashboard.css';
import {Outlet, Route, Routes} from "react-router-dom";


const Userdashboard = () => {


    return (
        <>
            <Navbar/>
            <div className="Container">
                <Routes>
                    <Route path="/" element={<Home/>}/>

                </Routes>
                <Outlet/>
            </div>
        </>
    )
}
export default Userdashboard;
