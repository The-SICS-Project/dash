import Logo from './Logo.svg'
import {Helmet} from 'react-helmet';
import {useForm} from "react-hook-form";
import {Magic} from 'magic-sdk';
import './signup.css';
import {useState} from "react";
import {loginUser} from "./Magic";
import {useNavigate} from "react-router-dom";
import swal from 'sweetalert';


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

        let res = await fetch('https://sics-backend-ffyd6.ondigitalocean.app/account/signup', options);


        if(res.status===200) {
            swal({
                title: "Good job!",
                text: "Your account has been created sucessfully!!",
                icon: "success",
                button: "Ok!",
            });
            setLoading(true);
            if (!email) {
                setLoading(false);
                setError('Email is Invalid');
                return;
            }
            try {
                console.log(email)
                const did_token=await loginUser(email);
                setLoading(false);
                const options = {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer '+did_token,
                        'content-type': 'application/json'
                    },

                };

                const res= await fetch('https://sics-backend-ffyd6.ondigitalocean.app/account/segment', options)

                if(res.status===205)
                {const options = {
                    method: 'PATCH',
                    headers: {
                        Authorization: 'Bearer '+did_token,
                        'content-type': 'application/json'
                    },

                };

                    fetch('https://sics-backend-ffyd6.ondigitalocean.app/account/signup', options)

                    navigate('/companydashboard', {replace: true});
                }
                else
                {const options = {
                    method: 'PATCH',
                    headers: {
                        Authorization: 'Bearer '+did_token,
                        'content-type': 'application/json'
                    },

                };

                    fetch('https://sics-backend-ffyd6.ondigitalocean.app/account/signup', options)

                    navigate('/dashboard', {replace: true});
                }
            } catch (error) {
                setError('Unable to log in');
                console.error(error);
            }
        }
        else{
            swal({
                title: "OOPS!",
                text: "Account already exists!!",
                icon: "error",
                button: "Ok!",

            })

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
                    <input className="FirstName" type="text" placeholder="FirstName" {...register("first_name")}
                           required/><br></br>

                    <input className="LastName" type="text" placeholder="LastName"  {...register("last_name")}
                           required/><br></br>

                    <input className="SignupEmail" type="email" placeholder="Email address"  {...register("email")}
                           required/><br></br>

                    <input className="CompanyName" type="text" placeholder="Company Name"  {...register("company_name")}
                          /><br></br><br></br>

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
