import React from 'react';
import './education.css'

const Education = () => {
    return (
        <div className="container">
            <div className="heading">
                <h1>Education</h1>
            </div>
            <div className="education-content load-animation">
                <div className="education-content-1">
                    <p className="education-institue">Guru Gobind Singh Indraprastha University</p>
                    <p className="degree">Bachelor Of Technology (E.C.E)</p>
                    {/* <div className="degree-div">
                        <p><strong>Aggregate:</strong> 61.5%(Till 7th sem)</p>
                        <p><strong>Graduation :</strong> In Final sem</p>

                    </div> */}
                </div>
                <div className="education-content-2">
                    <p className="education-institue">Vivekanand School</p>
                    <p className="degree">12th</p>
                        <p><strong>Aggregate:</strong> 77.2%</p>
                    <p className="degree">10th</p>
                        <p><strong>Aggregate:</strong>78.4%</p>
                </div>
            </div>
            
        </div>
    );
};

export default Education;