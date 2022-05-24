import React from "react";

function Plans(){

    return (
        <div className="health_plan_main">
                <p>We have health plans for everyone</p>
                <div className="health_plan">
                    <div className="plan">
                        <img src = "./Images/hr_manager.svg" />
                        <h3>For your business</h3>
                        <p>Health insurance that won' disappoint you or your employees</p>
                        <span>Learn more</span>
                    </div>
                    <div className="plan">
                    <img src = "./Images/family_icon.svg" />
                        <h3>For you & your family</h3>
                        <p>Get up to N1.8M in medical coverage with our monthly health insurance plans</p>
                        <span>Learn more</span>
                    </div>
                    <div className="plan">
                    <img src = "./Images/parent_icon.svg" />
                        <h3>For your parents</h3>
                        <p>Peace of mind that Papa and Mama’s health are taken care of</p>
                        <span>Learn more</span>
                    </div>
                </div>
                
        </div>
    )
}



export default Plans