import Logo from './Logo.svg'
import {Helmet} from 'react-helmet';
import {useForm} from "react-hook-form";
import {Magic} from 'magic-sdk';
import './signup.css';
import {useState} from "react";
import {loginUser} from "./Magic";
import {useNavigate} from "react-router-dom";


function Signup(props) {
    const magic = new Magic('pk_live_AABC93231E65FC6F');
    const [error, setError] = useState(null)
    const {register, handleSubmit} = useForm();
    const navigate= useNavigate();
    const [loading, setLoading] = useState('');
    const onSubmit = async data => {

        const email=data.email;
        console.log(JSON.stringify(data));
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data)

        };

        let res = fetch('https://sics-backend-ffyd6.ondigitalocean.app/account/signup', options)
            .then(async (response) => {
                if (response.status == 400) {
                    throw Error('User already Exists!!!');
                } else {
                    return response.status

                }
            });

        if(res===200) {
            setLoading(true);
            if (!email) {
                setLoading(false);
                setError('Email is Invalid');
                return;
            }
            try {
                console.log(email)
                await loginUser(email);
                setLoading(false);
                navigate('/dashboard', {replace: true});
            } catch (error) {
                setError('Unable to log in');
                console.error(error);
            }
        }


    };
    return (

        <div className="signupcontainer">
            <div className="signupbody"></div>
            <Helmet>
                <title>SICS | Sign Up</title>

            </Helmet>

            <div className="signupbox">
                <img className="Logosignup" src={Logo} id={Logo} width="150" height="50"/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="heading1">Sign up to continue to</label><br/><br/><label
                    className="heading2"> SICS Dashboard</label><br/>
                    <input className="FirstName" type="text" placeholder="First name" {...register("first_name")}
                           required/><br></br>

                    <input className="LastName" type="text" placeholder="Last name"  {...register("last_name")}
                           required/><br></br>

                    <input className="SignupEmail" type="email" placeholder="Email address"  {...register("email")}
                           required/><br></br>

                    <input className="CompanyName" type="text" placeholder="Company name"  {...register("company_name")}
                           required/><br></br><br></br>

                    <button className="SignUp" type="submit">Sign Up</button>
                    <br></br>

                </form>
                <br/><br/>
                {error && <div className="errormsg">{error}</div>}
            </div>


        </div>


    )

}

export default Signup;


// fetch("https://sics-python.herokuapp.com/",{
//     mode: 'no-cors',
//     method: 'GET',
//     header: {
//         authorization: "Bearer " + did_Token,
//         "Content-type": 'application/json',
//         "accept": 'application/json'
//     },
// }).then(async  (resp) => {
//     const response = await resp.json();
//     console.log(response)
// })
