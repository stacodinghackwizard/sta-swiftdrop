import React from 'react';
import { Link } from "react-router-dom";
import DriverListComponent from "../driverListComponent/hello";
import Info from "../driverListComponent/info";
import Menu from "../driverListComponent/menu"
import Profile from "../driverListComponent/Profiles"
import Password from "../driverListComponent/Password"
import Company from "../driverListComponent/Company"
import License from "../driverListComponent/License"
import Vehicle from "../driverListComponent/Vehicle"
import Delivery from "../driverListComponent/Delivery"
import Payout from "../driverListComponent/Payout"
import Pmanage from "../driverListComponent/Pmanage"
import {Route, Routes, Outlet} from "react-router-dom"
import "../profileComponent/style/App.css"

export default function DriversListSection() {

    return (

        <>

            
            <div className="height">
               
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb  pt-2 rounded-3">
                        <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                        <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Drivers</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/driver-list" className="text-decoration-none" style={{ color: "#F8B602" }}>Setting</Link></li>
                    </ol>
                    </nav>
                </div>

                <div className="py-2">
                <div className="fles">
                    {/*<Menu/>*/}
                    <Routes>
                    <Route path="" element={<DriverListComponent/>}/>
                        <Route path="Info" element={<Info/>}/>
                        <Route path="Menu" element={
                        <React.Fragment>
                        
                        <Menu />
                       
                        <Outlet />
                        
                        </React.Fragment>
                    }>
                         <Route path="Profile" element={<Profile />} />
                         <Route path="Password" element={<Password />} />
                         <Route path="Company" element={<Company />} />
                         <Route path="License" element={<License />} />
                         <Route path="Vehicle" element={<Vehicle />} />
                         <Route path="Payout" element={<Payout />} />
                         <Route path="Delivery" element={<Delivery />} />
                         <Route path="Pmanage" element={<Pmanage />} />
                        </Route>
                    </Routes>
                    </div>
                </div>
            </div>


        </>

    )

}