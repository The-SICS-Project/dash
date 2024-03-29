import Logo from './Logo.svg'
import {Helmet} from 'react-helmet';
import {useForm} from "react-hook-form";
import "./styles.css"
import {Link, useNavigate} from 'react-router-dom';
import {loginUser} from "./Magic";
import {useState} from "react";
import swal from "sweetalert";





function Login(props) {
    const [loading, setLoading] = useState('');
    const [error, setError] = useState(null);
    const navigate= useNavigate();
    const {register, handleSubmit} = useForm();
    const OnSubmit = async ({email}) => {
                const options = {method: 'GET', headers: {'content-type': 'application/json'}};


       const res= await fetch('https://sics-9hq7p.ondigitalocean.app/account/user?email='+email, options)

            .then(response => { if(response.status === 200){
             return response.status;}})
        .catch(err => console.error(err));

      if(res==200) {
          setLoading(true);
          if (!email) {
              setLoading(false);
              setError('Email is Invalid');
              return;
          }
          try {

             const did_token=await loginUser(email);

              localStorage.setItem("token",did_token);
              setLoading(false);

              const options = {
                  method: 'GET',
                  headers: {
                      Authorization: 'Bearer '+did_token,
                      'content-type': 'application/json'
                  },

              };

             const res= await fetch('https://sics-9hq7p.ondigitalocean.app/account/segment', options)
              if(res.status===205)
              {
                  navigate('/companydashboard', {replace: true});
              }
              else
              {

                  navigate('/dashboard', {replace: true});
              }


          } catch (error) {
              setError('Unable to log in');
              console.error(error);
          }
      }
      else
      {
          swal({
              title: "OOPS!",
              text: "No Account exists!!",
              icon: "error",
              button: "Ok!",

          })
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


