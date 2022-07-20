import Logo from './Logo.svg'
import {Helmet} from 'react-helmet';
import {useForm} from "react-hook-form";
import {Magic} from 'magic-sdk';
import './signup.css';
import {useState} from "react";


function Signup(props) {
    const magic = new Magic('pk_live_AABC93231E65FC6F');
    const [error, setError] = useState(null)
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data.email);

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
                    const did_Token = await magic.auth.loginWithCredential(data.email);

                }
            })
            .then(response => console.log(response.status))
            .catch(err => {
                setError(err.message);
            });


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