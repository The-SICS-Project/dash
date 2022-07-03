import Logo from './Logo.svg'
import {Helmet} from 'react-helmet';
import {Magic} from 'magic-sdk';
import {useForm} from "react-hook-form";
//import login from "./login";
//import axios from "axios";


function Login() {
    //const magic = new Magic('pk_live_AABC93231E65FC6F');
    const {register, handleSubmit} = useForm();
    const onSubmit = async ({FirstName},{LastName},{email}) => {
       //const did_Token = await magic.auth.loginWithMagicLink({email})
        //console.log(did_Token)
        console.log(data);
        // const logdata={
        //     fname:{FirstName},
        //     lname:{LastName},
        //     mail:{email},
        //     };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(logdata)
        };

        fetch('https://forty-owls-rescue-116-68-105-206.loca.lt/account/signup', options)
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
            <img className="Logo" src={Logo} id={Logo} width="150" height="120"/><br/><br/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>SignUp to continue to</label><br/><label> SICS Dashboard</label><br/>
                <input className="FirstName" type="FirstName" placeholder="FirstName" id="FirstName" {...register("FirstName")}
                       required/><br></br>

                <input className="LastName" type="LastName" placeholder="LastName" id="LastName" {...register("LastName")}
                       required/><br></br>

                <input className="Email" type="email" placeholder="Email address" id="Email" {...register("email")}
                       required/><br></br>

                <input className="Company Name" type="Company Name" placeholder="Company Name" id="Company Name" {...register("CompanyName")}
                       required/><br></br><br></br>

                <button className="SignUp" type="submit">Sign Up</button>
                <br></br>




            </form>

        </div>




    )

}

export default Login;



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