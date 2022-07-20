import "./ticket.css"
import {useForm} from "react-hook-form";
import {Helmet} from "react-helmet";
function Ticket() {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {console.log(data);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',

            },
            body:JSON.stringify(data)

        };

        fetch('https://sics-backend-ffyd6.ondigitalocean.app/account/signup', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));



    };
    return(
    <div className="ticketform">
        <Helmet>
            <title>SICS | Tickets</title>
            <link rel="icon" href="Logo.svg" type="image/svg"/>
        </Helmet>
        <h3>Create Ticket</h3>
        <form onSubmit={handleSubmit(onSubmit)}>


            <select  className="dropdown_brand" >
                <option value="Sony">Sony</option>
                <option value="Panasonic">Panasonic</option>
                <option value="Samsung">Samsung</option>
                <option value="Apple">Apple</option>
            </select>
            <select  className="dropdown_product" >
                <option value="RMX550">RMX550</option>
                <option value="RMX750">RMX750</option>
                <option value="RMX950">RMX950</option>
                <option value="RMX580">RMX580</option>
            </select>
            <select  className="dropdown_model" >
                <option value="model">Refigerator</option>
                <option value="saab">TV</option>
                <option value="mercedes">Radio</option>
                <option value="audi">Phone</option>
                </select>
            <input className="brief" type="text" placeholder="Brief" {...register("first_name")}
                   required/>
            <input className="description" type="text" placeholder="Description" {...register("first_name")}
                   required/>
            <label className="container">Under Warranty
                <input type="checkbox" />
                    <span className="checkmark"></span>
            </label>
            <button className="Submit" type="submit">Create Ticket</button>
            <br></br>
        </form>

    </div>

    )};


export default  Ticket;