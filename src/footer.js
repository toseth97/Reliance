import React from "react";

 function Footer(){
    return (
        <div className="my_footer">
        <div className="footer_content">
           <div className="child"> <img src = './Images/logo-white.svg' alt="logo"/></div>
            <div className="child">
                <h3>company</h3>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Team</li>
                    <li>Board</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className="child">
                <h3>HEALTH PLAN</h3>
                <ul>
                    <li>For You & Your Family</li>
                    <li>For Your Parent</li>
                    <li>For Business</li>
                </ul>
            </div>
            <div className="child">
                <h3>RESOURSES</h3>
                <ul>
                    <li>Your Available Hospital</li>
                    <li>Your Bemefit List</li>
                    <li>Download Your Care App</li>
                    <li>Become An Affliate</li>
                    <li>Hospital Portal</li>
                    <li>FAQs</li>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="child">
                <h3>Contact</h3>
                <ul>
                    <li>32 Lanre Awolokun Street, Gbagada, Lagos, Nigeria</li>
                    <li>0700-RELIANCE (0700-73542623)</li>
                    <li>hello@reliancehmo.com</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Footer