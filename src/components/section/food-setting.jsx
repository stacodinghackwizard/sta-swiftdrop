import FoodSettingComponent from "../foodSettingComponent/hello";
import Percent from "../foodSettingComponent/percent"
import Foodmenu from "../foodSettingComponent/foodMenu"
import AddEdit from "../foodSettingComponent/addEdit"
import SetMenu from "../foodSettingComponent/SetMenu"
import Review from "../foodSettingComponent/Review"
import { Route, Routes, Link, useNavigate} from "react-router-dom"
import React, { useEffect, useState } from 'react';
export default function SettingSection() {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Check if the token is present in localStorage
      const token = localStorage.getItem('token');
      if (token) {
        // If token is present, set authentication to true
        setAuthenticated(true);
      } else {
        // If token is not present, redirect the user to the login page
        navigate('/SuperLogin');
      }
    }, [history]);

    return (

        <>

            <div className="height">
                <div className="breadcrumb-flex"> 
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Food Seller</a></li>
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/food-settings" className="text-decoration-none" style={{ color: "#F8B602" }}>Setting</Link></li>
                        </ol>
                    </nav>
                </div>
                <div className="py-2">
                <div className="flex">
                <div className="main">
                {authenticated && (
              <>
                    <FoodSettingComponent/>
                    <Routes>
                        <Route path="Foodmenu" element={ <Foodmenu/>}/>
                        <Route path="AddEdit" element={ <AddEdit/>}/>
                        <Route path="Percent" element={ <Percent/>}/>
                        <Route path="Review" element={ <Review/>}/>
                        <Route path="SetMenu" element={ <SetMenu/>}/>
                    </Routes>
                    </>
                )}
                    </div>
                    </div>
                </div>
            </div>
        </>

    )

}