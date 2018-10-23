import React, { Component, Fragment } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-hero">
          <div className="home-hero-head"> Ready to lower your energy bill?</div>
          <button className="home-hero-cta"> Learn more </button>
          <button className="home-hero-stories"> Hear user stories --> </button>
        </div>
      </div> 
    )
  }
}

export default Home;