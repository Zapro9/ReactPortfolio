import {Link} from "react-router-dom";
import React from 'react';
import Example1 from "../Portfolio/Screen Shot 2020-05-08 at 3.14.56 PM.png"
import Example2 from "../Portfolio/Screen Shot 2020-05-11 at 10.27.54 PM.png"
import Example3 from "../Portfolio/Screen Shot 2020-06-03 at 2.25.09 AM.png"
import "./Portfolio.css"


class Portfolio extends React.Component {
    render(){
        return (
            <>
            <h1>Gallery of work</h1>
            <p id="resumeLink"><a href={"https://drive.google.com/file/d/1VPkjVAvz2C-Y7rr_KShtW7VV9eCc-3N1/view?usp=sharing"} target="_blank" className="resumeLink">Resume</a></p>
            <hr className="testBreak"></hr>
            <br></br>
            <a href="https://github.com/samanthascott1992/Project2" target="_blank">
                <img src={Example1} className="Project-One portfolioImg" to="https://github.com/https://github.com/samanthascott1992/Project2" className="testImages" alt="Link to project github page" />
            </a>
            <p className="projectInfo">Sell Yo Stuff was a collaborative piece with two of my classmates. The goal of this app is to allow you to see yard sales, estate sales, and any other kind of property sale that someone might be hosting. Think of Craigslist for the yard sale hunters.  
            </p>
            <a href="https://github.com/samanthascott1992/Project2" target="_blank">
                <img src={Example2} className="Project-One portfolioImg" className="testImages" alt="Link to project github page" />
            </a>
            <p className="projectInfo">With Sell Yo Stuff I was responsible for the layout and styling of the page. We did run into some issues with the framework that I was trying to utilize and what the group used. In the end we had a very good looking project that I would love to revisit and revamp!
            </p>
            <a href="https://github.com/Zapro9" target="_blank">
            <img src={Example3} className="Project-One portfolioImg" className="testImages" alt="Link to project github page" />
            </a>
            
            <p className="projectInfo">Over the course of the projects, I have decided that I truly enjoy creating the entire css package that will be used by the projects. I like to use a navbar from a framework but enjoy the challenge of creating styles from scratch. 
            </p>
            </>
        );
    }
}

export default Portfolio;