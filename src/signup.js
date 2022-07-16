import Logo from './Logo.svg'
import {Helmet} from 'react-helmet';
import {useForm} from "react-hook-form";
//import login from "./login";
//import axios from "axios";
import './signup.css';


function Signup() {
    //const magic = new Magic('pk_live_AABC93231E65FC6F');
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
        // const did_Token = await magic.auth.loginWithMagicLink({email})
        // console.log(did_Token)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data)

        };

        fetch('https://sics-backend-ffyd6.ondigitalocean.app/account/signup', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));


    };
    return (

        <div className="container">
            <Helmet>
                <title>SICS | Sign Up</title>
                <link rel="icon" href="Logo.svg" type="image/svg"/>
            </Helmet>

            <div className="signupbox">
                <img className="Logo" src={Logo} id={Logo} width="150" height="50"/>
                           <form onSubmit={handleSubmit(onSubmit)}>
                <label className="heading1">Sign up to continue to</label><br/><br/><label className="heading2"> SICS Dashboard</label><br/>
                <input className="FirstName" type="text" placeholder="FirstName" {...register("first_name")}
                       required/><br></br>

                <input className="LastName" type="text" placeholder="LastName"  {...register("last_name")}
                       required/><br></br>

                <input className="Email" type="email" placeholder="Email address"  {...register("email")}
                       required/><br></br>

                <input className="CompanyName" type="text" placeholder="Company Name"  {...register("company_name")}
                       required/><br></br><br></br>

                <button className="SignUp" type="submit">Sign Up</button>
                <br></br>


            </form>
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