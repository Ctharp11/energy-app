import React, { Component } from 'react';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
      return (
        <div className="nav"> 
          <div className="nav-head"> Energex </div>
          {!this.props.loggedin 
            ?
            <div className="nav-subhead" onClick={this.props.toggleModal}> Sign in </div>
            :
            <div className="nav-subhead"> <span className="nav-subhead"> Account </span> <span className="nav-subhead"> Sign out </span> </div>
          }
        </div>
      )
    }
}

export default Nav;