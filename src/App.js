import React, { Component, Fragment } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import { getUserStories } from './services/utils';

class App extends Component {
    constructor() {
        super();
        this.state = {
            userStories: []
            
        }
    }

    componentDidMount() {
        getUserStories()
        .then(res => this.setState({ userStories: res.data.results }))
        .catch(err => console.log(err))
    }
    
    render() {
        return(
          <div> 
            <Nav> {this.state.nav} </Nav>
            <div className="container">
               <Home numbers={this.state.numbers} />
            </div>
          </div>
        )
    }
}

export default App;