import Logo from './Logo.svg'
import { Helmet } from 'react-helmet';
import {Magic} from 'magic-sdk';
const m = new Magic('pk_live_AABC93231E65FC6F');
 const handleLogin=async({ email})=>{

     try {
        const didToken= await m.auth.loginWithMagicLink({ email:document.getElementById('email').value });
         console.log(didToken);
     } catch {
     }

}
function Login() {



  return (

      <div className="container">
          <Helmet>
          <title>SICS | Login</title>
              <link rel="icon" href="Logo.svg" type="image/svg"/>
          </Helmet>
          <img className="Logo" src={Logo} id={Logo} width="150" height="120"/><br/><br/>
        <form >


           <input className="Email" type="email" placeholder="Email"  id="Email" required /><br></br><br></br>
          <input type="password" placeholder="password" name="password" required  /><br></br><br></br>
          <button className="login" type="submit" onClick={handleLogin}>Login</button><br></br><br></br>


          <span className="sign">Don't have an account? <a href="#">sign up</a></span>

        </form>

      </div>


  )

}
export default Login;
