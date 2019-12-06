import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Registration from './auth/Register';
import Login from './auth/Login';
import './App.css';
import { Dropdown } from 'semantic-ui-react';
import Home from './components/Home';

// const dropdownOptionsAuth = [
  // {key:1, text:'Sign Up', value: 1},
  // {key:2, text:'Sign In', value: 2},
// ]


function Nav(props){
  const logged_out_nav = (
    <div role="list" className="ui link list listLoggedOut" >
      <Link to='/login'>Sign In </Link>
      <Link to='/register'>Sign Up</Link>
    </div>
  );

  const logged_in_nav = (
    <div role="list" className="ui link list">
      <a role='listitem' className='item'>Logout</a>
    </div>
  );
  
  

  return(
    <div className="ui menu">
      <div className="header item" href='#'>
        VISIT KENYA
      </div>
      <a className="item" href='/register'>
        Register
      </a>
      <div className="right menu">
        {props.logged_in ? logged_in_nav : logged_out_nav}      
        {/* <Dropdown text='Account' options={dropdownOptionsAuth} simple item /> */}
      </div>
    </div>      
  );
  
}


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      logged_in : localStorage.getItem('token') ? true : false,
    }
  }
  render(){
    return (
      <BrowserRouter>
        <Nav logged_in={this.state.logged_in}></Nav>
          <Route path='/register' exact component={Registration}></Route>
          <Route path='/login' exact component={Login}></Route>
      </BrowserRouter>      
    );
  }
}