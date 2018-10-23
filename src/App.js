import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home/Home';
import User from './components/User/User';
import NotFound from './components/NotFound';
import { getUserStories } from './services/utils';
import { protectedRoute } from './services/HOC';
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
        if (sessionStorage.getItem('loggedin')) {
            let user = JSON.parse(sessionStorage.getItem('loggedin'));
            this.setState({ userInfo: user, loggedin: true, logginModal: false, error: '' })
        }
        getUserStories()
        .then(res => this.setState({ userStories: res.data.results }))
        .catch(err => console.log(err))

        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleChange = (e) => {
        this.setState({ error: '' })
        const { name, value } = e.target;
        this.setState({ [name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.password === '' || this.state.email === '') {
            this.setState({ error: 'You must include username and password!'})
            return;
        }
        this.state.data.users.map(user => {
            if (user.username === this.state.email && user.password === this.state.password) {
                this.setState({ userInfo: user, loggedin: true, logginModal: false, error: '' })
                sessionStorage.setItem('loggedin', JSON.stringify(user))
                this.props.history.push('/account');
                return;
            }
            else {
                this.setState({ error: 'Username or password incorrect!'})
            }
        })
    }

    toggleModal = () => {
        this.setState({ logginModal: !this.state.logginModal })
    }

    logout = () => {
        this.setState({ loggedin: false, userInfo: '' })
        sessionStorage.removeItem('loggedin')
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
            browser: this.props,
            loggedin: this.state.loggedin,
            toggleModal: this.toggleModal,
            logout: this.logout,
            userInfo: this.state.userInfo,
            userStories: this.state.userStories
        }
        return(
          <div> 
            <Nav {...allProps} /> 
            <Switch>
              <Route exact path='/' render={ () => <Home {...allProps} /> } />
              <Route exact path='/account' render={ () => protectedRoute(User, allProps, this.state.loggedin) } />
              <Route component={NotFound} />
            </Switch>
            
            {
                this.state.logginModal &&
                <div className="modal-outer">
                  <div className="modal-inner" ref={this.setWrapper}>
                    <div className="modal-inner-x" onClick={this.toggleModal}>X</div>
                    <div className="modal-inner-head"> Sign In </div>
                    <div className="modal-inner-text"> Welcome to Energex! Thanks for choosing us to help you save money on your energy bill.</div>
                    {this.state.error !== '' ? <div className="error"> {this.state.error} </div> : null}
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

export default withRouter(App);