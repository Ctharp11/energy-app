import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
      return (
        <div className="nav"> 
          <div className="nav-head"><Link to="/">Energex</Link></div>
          {!this.props.loggedin 
            ?
            <div className="nav-subhead" onClick={this.props.toggleModal}> Sign in </div>
            :
            <div className="nav-subhead"> <span className="nav-subhead"><Link to="/account"> Account </Link>  </span> <span className="nav-subhead" onClick={this.props.logout }> Sign out </span> </div>
          }
        </div>
      )
    }
}

export default Nav;