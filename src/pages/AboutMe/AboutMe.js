import React from 'react';
import "./AboutMe.css";

class AboutMe extends React.Component {

  render(){
    return (
        <>
        <div className="AboutMe">
            <h2 className="aboutHeader">
                About Me 
            </h2>
            <hr className="aboutBreak"></hr>
            <p className="myInfo">
                Hello and Welcome to my site! I'll be the first to admit that the design process is sometimes extremely hard to get right. Perhaps you are trying to create a new logo or website and you just don't know the right direction to be heading. Or perhaps you've completely given up on trying to create these new ideas thinking they aren't meant to be.
            </p>
        </div>
        <div className="aboutMe2">
            <p className="secondInfo">
                But that is where I can help! With over 5+ years of marketing and design experience, I am able to pinpoint the needs of the client and get to the root of the problem when it comes to new designs or making modification to existing ones. Developing new ideas and solving the problems involved is what I live for. If you are looking for someone that is dedicated to providing professional level material then you have come to right place. Have a look around and let me know how I can help!
            </p>
        </div>
        </>
    );
  }
}

export default AboutMe;