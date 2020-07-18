import React from 'react';
import "./Home.css"
import Example1 from "../Portfolio/Screen Shot 2020-05-08 at 3.14.56 PM.png"
import Example2 from "../Portfolio/Screen Shot 2020-05-11 at 10.27.54 PM.png"
import Example3 from "../Portfolio/Screen Shot 2020-06-03 at 2.25.09 AM.png"
import Example4 from "../Portfolio/WebDev Resume.png"
import {Link} from "react-router-dom";


class Home extends React.Component {

  render(){
    return (
      <>
      <div className="introBanner">
      <h1 className="homeHeader">Hello and welcome to my website!</h1>
      <p className="introPara">My name is Zach & here you can see some of my work! Please have a look around and feel free to reach out with any request!</p>
      </div>
      <br></br>
      <div className="displayPhotos1">
        <img src={Example1} className="Project-One portfolioImg" to="./Portfolio" alt="Link to project github page" />
        <p className="testingText">Example Test 1</p>
      </div>
      <div className="displayPhotos1">
        <img src={Example1}/>
        <p className="testingText">Example Test 2</p>
      </div>
      <div className="displayPhotos1">
        <img src={Example1}/>
        <p className="testingText">Example Test 3</p>
      </div>
      <div className="displayPhotos1">
        <img src={Example1}/>
        <p className="testingText">Example Test 4</p>
      </div>
      </>
    );
  }
}

export default Home;
