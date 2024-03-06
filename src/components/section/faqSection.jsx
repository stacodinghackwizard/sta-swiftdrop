import { Link, useNavigate } from "react-router-dom";
import FaqComponent from "../faqComponent/hello";
import React, { useEffect, useState } from 'react';

export default function FaqSection() {
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
        navigate('/');
      }
    }, [history]);
    return (

        <>
            <div className="height">
                
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/faq" className="text-decoration-none" style={{ color: "#F8B602" }}>FAQ</Link></li>
                        </ol>
                    </nav>
                </div>
                <div className="py-2">
                {authenticated && (
              <>
                    <FaqComponent/>
                    </>
                )}
                </div>
            </div>
        </>

    )

}