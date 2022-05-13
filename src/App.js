import Logo from './Logo.svg'
import { Helmet } from 'react-helmet';

function Login() {
  return (

      <div class="container">
          <Helmet>
          <title>SICS | Login</title>
              <link rel="icon" href="Logo.svg" type="image/svg"/>
          </Helmet>
          <img className="Logo" src={Logo} id={Logo} width="150" height="120"/><br/><br/>
        <form>

          <input type="text" placeholder="Email address" id ="Email" name="Email" /><br></br><br></br>
          <input type="password" placeholder="password" name="password"  /><br></br><br></br>
          <button class="login" type="submit">Login</button><br></br><br></br>

          <span class="sign">Don't have an account? <a href="#">sign up</a></span>
        </form>

      </div>


  )
}
export default Login;
