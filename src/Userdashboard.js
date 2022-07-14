import Home from "./Home";
import Signup from "./signup";

function Userdashboard() {
    let Component
    switch (window.location.pathname){
        case "/" :
        Component=<Home />
            break;
        // case "/tickets":
        //     Component=<tickets />
        //     break;
        case "/chat":
            Component=<Signup />
            break;
        // case "/logout":
        //     Component=<logout />
        //     break;
    }

    return(
        <>
        <Home/>
    {Component}
            </>
    )
}
 export default Userdashboard
