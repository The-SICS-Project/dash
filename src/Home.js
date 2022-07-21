import {Helmet} from "react-helmet";
import "./user_dashboard.css";


function Home() {

    return (


        <div className="user_dashboard">

            <Helmet>
                <title>SICS | Home</title>
                <link rel="icon" href="Logo.svg" type="image/svg"/>
            </Helmet>

            <div className="createticket_counter">
                <h1>15</h1>
                <h2>Tickets created</h2>

            </div>
            <div className="Ticketview_window">
                <h3>Your Tickets</h3>
                <ul>
                    <button className="Ticketlist"><h4>#125637</h4>I think my
                        refrigerator is eating my food
                    </button>
                    <button className="Ticketlist"><h4>#195522</h4>Tv is not turning
                        on
                    </button>
                    <button className="Ticketlist"><h4>#135535</h4>Washing machine
                        drum not turning
                    </button>
                    <button className="Ticketlist"><h4>#166515</h4>Mobile speaker
                        not working
                    </button>
                </ul>
            </div>
            <div className="openticket_counter">
                <h1>8</h1>
                <h2>Open Tickets</h2>
            </div>
            <div className="profile_window">
                <button className="new_ticket">+ NewTicket</button>
                <button className="Notification"></button>
                <button className="account"></button>

            </div>
            <div className="solvedticket_counter">
                <h1>4</h1>
                <h2>Solved Tickets</h2>

            </div>
            <div className="blankspace">

            </div>


        </div>
    )

}


export default Home;