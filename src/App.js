import Logo from './Logo.svg'
import {Helmet} from 'react-helmet';
import {Magic} from 'magic-sdk';

const m = new Magic('pk_live_AABC93231E65FC6F');
const handleLogin = async ({email}) => {

    try {
        const didToken = await m.auth.loginWithMagicLink({email: document.getElementById('email').value});
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
            <form>


                <input className="Email" type="email" placeholder="Email" id="email" required/><br></br><br></br>
                <button className="login" type="submit" onClick={handleLogin}>Login</button>
                <br></br><br></br>


                <span className="sign">Don't have an account? <a href="#">sign up</a></span>

            </form>

        </div>


    )

}

// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }

export default Login;
