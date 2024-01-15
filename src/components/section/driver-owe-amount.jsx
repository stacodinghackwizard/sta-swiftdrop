
import { Link } from "react-router-dom";
import DriverOweAmountComponent from "../driverOweAmountComponent/hello";

export default function DriverOweAmountSection() {

    return (

        <>

            <div className="height">
               
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb  pt-2 rounded-3">
                        <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                        <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Driver</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/driver-owe-amount" className="text-decoration-none" style={{ color: "#F8B602" }}>Owe Amount</Link></li>
                    </ol>
                    </nav>
                </div>

                <div className="py-2">
                    <DriverOweAmountComponent/>
                </div>
            </div>

        </>

    )

}