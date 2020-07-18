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
            <br></br>
            <a href="https://github.com/samanthascott1992/Project2" target="_blank">
                <img src={Example1} className="Project-One portfolioImg" to="https://github.com/https://github.com/samanthascott1992/Project2" className="testImages" alt="Link to project github page" />
            </a>
            <br></br>
            <a href="https://github.com/samanthascott1992/Project2" target="_blank">
                <img src={Example2} className="Project-One portfolioImg" className="testImages" alt="Link to project github page" />
            </a>
            <br></br>
            <a href="https://github.com/Zapro9" target="_blank">
            <img src={Example3} className="Project-One portfolioImg" className="testImages" alt="Link to project github page" />
            </a>
            <br></br>
            </>
        );
    }
}

export default Portfolio;