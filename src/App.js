import Logo from './Logo.svg'
import { Helmet } from 'react-helmet';
import {Magic} from 'magic-sdk';
import {useForm} from "react-hook-form";

const m = new Magic('pk_live_AABC93231E65FC6F');
let n = m;

function Login() {
    const {register,handleSubmit}=useForm()
    const onSubmit=(data)=> console.log(data)

  return (

      <div className="container">
          <Helmet>
          <title>SICS | Login</title>
              <link rel="icon" href="Logo.svg" type="image/svg"/>
          </Helmet>
          <img className="Logo" src={Logo} id={Logo} width="150" height="120"/><br/><br/>
        <form onSubmit={handleSubmit(onSubmit)}>

           <input className="Email" type="email" placeholder="Email"  id="Email" {...register("email")} required /><br></br><br></br>
          <button className="login" type="submit" >Login</button><br></br><br></br>


          <span className="sign">Don't have an account? <a href="#">sign up</a></span>

        </form>

      </div>


  )

}
export default Login;
//let header = {
//     token: `Bearer ${did_token}`
// }
// fetch("https://sics-python.herokuapp.com/login", {
//     method: 'POST',
//     headers: header
// }).then()