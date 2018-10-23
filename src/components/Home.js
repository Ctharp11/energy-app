import React, { Component, Fragment } from 'react';
import { loader } from '../services/HOC';
import Learn from './Learn';
import Stories from './Stories';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-hero">
          <div className="home-hero-head"> Ready to lower your energy bill?</div>
          <a href="#learn" className=""><button className="home-hero-cta"> Learn more </button></a>
          <a href="#stories" className=""><button className="home-hero-stories"> Hear user stories </button></a>
        </div>
        <Learn />
        {this.props.userStories.length > 0 
          ?
          <Stories stories={this.props.userStories} />
          :
          <div> Loading </div>
        }
        
      </div> 
    )
  }
}

export default Home;