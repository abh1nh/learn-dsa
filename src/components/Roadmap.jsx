import React from 'react';
import './Roadmap.css'

const Roadmap = ({steps}) => {
    return(
        <div className="roadmap-container"> 
        {steps.map((step, index) => (
            <div 
            key={index}
            className={`roadmap-item ${index % 2 === 0 ? "left" : "right"}`}> 
                <div className="roadmap-content"> 
                    <span className="roadmap-date"> {step.date} </span> 
                    <h3> {step.title} </h3>
                    <p> {step.description} </p>
                </div>
            </div>
        ))}
        </div>
    )
}

export default Roadmap;