import Logo from './Logo.svg'
import {Helmet} from 'react-helmet';
import {useForm} from "react-hook-form";
import "./styles.css"
import {Link, useNavigate} from 'react-router-dom';
import {loginUser} from "./Magic";
import {useState} from "react";




function Login(props) {
    const [loading, setLoading] = useState('');
    const [error, setError] = useState(null);
    const navigate= useNavigate();
    const {register, handleSubmit} = useForm();
    const OnSubmit = async ({email}) => {
                const options = {method: 'GET', headers: {'content-type': 'application/json'}};


       const res= await fetch('https://sics-backend-ffyd6.ondigitalocean.app/account/user/?email='+email, options)

            .then(response => { if(response.status === 200){
             return response.status;}})
        .catch(err => console.error(err));
       console.log(res)
      if(res==200) {
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

        <div className="logincontainer">
        <div className="designbox"> </div>
            <Helmet>
                <title>SICS | Login</title>
                <link rel="icon" href="Logo.svg" type="image/svg"/>
            </Helmet>

            <img className="LogoLogin" src={Logo}/>

            <div className="Logbox">
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <h1>Login to continue to<br/>&ensp;SICS Dashboard</h1>
                    <input className="Email" type="email" placeholder="Email address" id="Email" {...register("email")}
                           required/><br></br><br></br>
                    <button className="login" type="submit">{loading ? 'Loading...' : 'Login'}</button>
                    <br></br><br></br>


                    <span className="sign">Don't have an account? <Link to="/signup">sign up</Link></span>

                </form>
            </div>

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