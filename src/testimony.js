import React from "react";

let testimony_arr = [
    'RelianceHMO has really lived up to its name. It’s an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies.'
    ,'RelianceHMO has really lived up to its name. It’s an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies.',
    'RelianceHMO can truly be relied on. Their rates are competitive, their customer service is top notch and the fintech driven platform is mind blowing. During the lockdown when I had no access to hospital, docs took care of me via the app. It doesn\'t get better than this.',
    'Our relationship with RelianceHMO has so far been productive and we know them to be proactive in making sure our staff readily access healthcare services. We find them to be administratively responsive, customer services oriented and instituting innovations to their services to our organisation.',
    'RelianceHMO has been a reliable HMO for our company. Our staff members have easy access to healthcare via an easy to use online platform which has made the process of managing our HMO easier.'
]

function Testimony(){
    return(
        <div className="testimony_div">
            <h1>
                What people are saying about us
            </h1>
            <div className="testimony">
                    <i class='bx bx-chevron-left'></i>
                    <p>{testimony_arr[1]}</p>
                    <i class='bx bx-chevron-right' ></i>
            </div>
            <div className="testimony_div">
                <h1>
                    Businesses that use us
                </h1>
                <div className="partner_img">
                    <img src = './Images/bolt.png' />
                    <img src = './Images/daystar.png' />
                    <img src = './Images/ican.jpg' />
                    <img src = './Images/jumia.svg' />
                    <img src = './Images/opay.png' />
                    <img src = './Images/kudi.png' />
                    <img src = './Images/merry_bet.png' />
                    <img src = './Images/vedic.png' />
                </div>
            </div>
            

            
        </div>
    )
}
export default Testimony