import { Link } from "react-router-dom";
import OtherHistoryComponent from "../otherHistoryComponent/hello";
export default function OrderHistorySection() {

    return (

        <>

            <div className="height">
                
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/other-history" className="text-decoration-none" style={{ color: "#F8B602" }}>Other History</Link></li>
                        </ol>
                    </nav>
                </div>

                <div className="py-2">
                    <OtherHistoryComponent/>
                </div>
            </div>
        </>

    )

}