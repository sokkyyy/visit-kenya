import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Registration from './auth/Register';
import Login from './auth/Login';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      logged_in : localStorage.getItem('token') ? true : false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.setState({logged_in:true});
  }
  


  handleLogout(){
    localStorage.removeItem('token');
    this.setState({logged_in:false});
  }

  render(){
    return (
      <BrowserRouter>
        <Nav logged_in={this.state.logged_in} logout_user={this.handleLogout}></Nav>
          <Route path='/register' exact component={Registration}></Route>
          <Route path='/login' exact render={(props)=> <Login {...props} submit={this.handleSubmit}></Login> }></Route>
          <Route path='/home' exact render={(props)=> <Home {...props} sup={this.state.logged_in}></Home>} ></Route>
      </BrowserRouter>      
    );
  }

}
