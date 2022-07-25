import {Outlet, Route, Routes} from "react-router-dom";
import Companynavbar from "./company_navbar";
import Companyhome from "./company_Home";


const Companydashboard = () => {


    return (
        <>
            <Companynavbar/>
            <div className="company_Container">
                <Routes>
                    <Route path="/" element={<Companyhome/>}/>

                </Routes>
                <Outlet/>
            </div>
        </>
    )
}
export default Companydashboard;
