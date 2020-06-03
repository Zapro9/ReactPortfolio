import React from 'react';
import "./AboutMe.css";

class AboutMe extends React.Component {

  render(){
    return (
        <>
        <div className="AboutMe">
            <h2>
                Let me tell you a little about myself. 
            </h2>
            <p className="myInfo">
                I am originally from Houston, Texas. I got my degree in Game Art & Design while focusing on 3D animation and modeling. 
            </p>
            <p className="myInfo">
                I had the privilege of helping design and create the renders for a classified United States Department of Defense project before moving up to Colorado.
            </p>
        </div>
        </>
    );
  }
}

export default AboutMe;