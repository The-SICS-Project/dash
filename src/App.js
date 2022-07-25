import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Signup from "./signup";
import Userdashboard from "./Userdashboard";
import React, {useEffect, useState} from 'react';
import {UserContext} from "./userContext";
import {checkUser} from './Magic';
import Ticket from "./Ticket";
import Companydashboard from "./Company_dashboards";
import Companynavbar from "./company_navbar";


const App = () => {
    const [user, setUser] = useState({isLoggedIn: null, email: ''});
    const [loading, setLoading] = useState();
    useEffect(() => {
        const validateUser = async () => {
            setLoading(true);
            try {
                await checkUser(setUser);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        validateUser();
    }, [user.isLoggedIn]);
    return (
        <UserContext.Provider value={user}>
            <Router>
                { user.isLoggedIn  && <navigate to={{pathname: '/dashboard'}}/>}
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/dashboard/*" element={<Userdashboard/>}/>
                    <Route path="/ticket" element={<Ticket/>}/>
                    <Route path="/chat" element={<chat/>}/>
                    <Route path="/companydashboard/*" element={<Companydashboard/>}/>


                </Routes>
            </Router>
        </UserContext.Provider>
    )

}

export default App;