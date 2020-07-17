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
      <h1 className="homeHeader">Welcome to Proctors' Page!</h1>
      <p className="introPara">Here you will be able to see some of the things that I have created from Web Development to 3D Animations and Graphic Design! Please feel free to have a look around and let me know what you think. If you have a job request please feel free to contact me directly so that we can discuss the specifics of how I can help.</p>
      </div>
      <br></br>
      <div className="displayPhotos">
        <img src={Example1} className="Project-One portfolioImg" to="./Portfolio" alt="Link to project github page" />
        <p className="testingText">Example Test 1</p>
      </div>
      <div className="displayPhotos">
        <img src={Example1}/>
        <p className="testingText">Example Test 2</p>
      </div>
      <div className="displayPhotos">
        <img src={Example1}/>
        <p className="testingText">Example Test 3</p>
      </div>
      <div className="displayPhotos">
        <img src={Example1}/>
        <p className="testingText">Example Test 4</p>
      </div>
      </>
    );
  }
}

export default Home;
