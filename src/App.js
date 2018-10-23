import React, { Component, Fragment } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import { getUserStories } from './services/utils';
import data from './data.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
            userStories: [],
            logginModal: false,
            loggedin: false,
            email: '',
            password: '',
            error: '',
            data
        }
    }

    componentDidMount() {
        getUserStories()
        .then(res => this.setState({ userStories: res.data.results }))
        .catch(err => console.log(err))

        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.data.users)
        console.log(this.state.email)
        console.log(this.state.password)
        this.state.data.users.map(user => {
            console.log(user)
            if (user.username === this.state.email && user.password === this.state.password) {
                console.log('match with', user.name)
            }
            else {
                console.log('no match')
            }
        })
    }

    toggleModal = () => {
        this.setState({ logginModal: !this.state.logginModal })
    }

    setWrapper = (node) => {
        this.wrapperRef = node
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.toggleModal()
         }
    }

    render() {
        const allProps = {
            loggedin: this.state.loggedin,
            toggleModal: this.toggleModal
        }
        return(
          <div> 
            <Nav {...allProps} /> 
            <Home numbers={this.state.numbers} />

            {
                this.state.logginModal &&
                <div className="modal-outer">
                  <div className="modal-inner" ref={this.setWrapper}>
                    <div className="modal-inner-x" onClick={this.toggleModal}>X</div>
                    <div className="modal-inner-head"> Sign In </div>
                    <div className="modal-inner-text"> Welcome to Energex! Thanks for choosing us to help you save money on your energy bill.</div>
                    <form onSubmit={this.handleSubmit}>
                        <div><input type="text" className="modal-inner-input" placeholder="Email" name="email" onChange={this.handleChange}/></div>
                        <div><input type="password" className="modal-inner-input" placeholder="Password" name="password" onChange={this.handleChange} /></div>
                        <div><input type="submit" className="modal-inner-button" value='Sign In' /> </div>
                    </form>
                  </div>
                </div> 
            }
          </div>
        )
    }
}

export default App;