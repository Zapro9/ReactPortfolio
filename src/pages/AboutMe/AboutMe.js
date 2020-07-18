import React from 'react';
import "./AboutMe.css";
import headshot from "../AboutMe/IMG_0189.png"

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
                Welcome again to my website! My name is Zach and I am a creative designer and web developer with over 5+ years experience specializing in graphic design, 3D animation, web development, and marketing. I began my marketing and creative design career in 2015 working for DZ9 Power out of Houston,TX. I was the lead animator in charge of leading and mentoring 4 entry-level animators as we worked to design and development the marketing material. After leaving DZ9, I began creating the entire suite of marketing needs for Saddle River Range. Including business cards, promotions flyers, letterheads, presentation folders, company portfolio, event cards, magazine ads, and news articles.
                <br></br>
                <a href={"https://drive.google.com/file/d/1VPkjVAvz2C-Y7rr_KShtW7VV9eCc-3N1/view?usp=sharing"} target="_blank" className="resumeLink"> Professional Resume</a>
            </p>
        </div>
        <div className="aboutMeHeadshot">
            <img src={headshot}/>
        </div>
        <br></br>
        </>
    );
  }
}

export default AboutMe;