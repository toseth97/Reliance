import React from "react";


function Navigation(){
   

    return(
       <div className="navigation ">
            <div className="nav_bar">
                <img src="./Images/logo Reliance.svg" alt="logo"/>
                <div className="nav_div">
                    <ul className="nav_ul">
                        <span className="list_item"><li>Our Health Plans</li><i class='bx bx-chevron-down'></i><span>
                        <ul className="dropdown">
                            <li>For You & Your Family</li>
                            <li>For Your Parent</li>
                            <li>For Business</li>
                        </ul>
                            </span></span>

                        <span className="list_item"><li>Support</li><i class='bx bx-chevron-down'></i><span>
                        <ul className="dropdown">
                                <li>FAQ</li>
                                    <li>Call us: 070073542623</li>
                                    <li>WhatsApp: 017001580</li>
                                    <li>Email: hello@reliancehmo.com</li>
                            </ul>
                            </span></span>
                           
                        <span className="list_item"><li>Resources</li><i class='bx bx-chevron-down'></i>
                        <span>
                            <ul className="dropdown">
                                <li>Your Available Hospital</li>
                                <li>Your Bemefit List</li>
                                <li>Download Your Care App</li>
                                <li>Become An Affliate</li>
                            </ul>
                        </span>
                        </span>
                    </ul>
                    <span className="login">Login</span>
                    <span className="get_started">Get Started</span>
                </div>
            </div>
       </div>

    )
}



export default Navigation