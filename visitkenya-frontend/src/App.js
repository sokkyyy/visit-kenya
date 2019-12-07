import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Registration from './auth/Register';
import Login from './auth/Login';
import './App.css';
import Home from './components/Home';




function Nav(props){
  const logged_out_nav = (
    <div role="list" className="ui link list listLoggedOut" >
      <Link to='/login'>Sign In </Link>
      <Link to='/register'>Sign Up</Link>
    </div>
  );

  const logged_in_nav = (
    <div role="list" className="ui link list">
      <a role='listitem' className='item' onClick={props.logout_user}> Logout</a>
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
