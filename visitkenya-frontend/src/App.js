import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Registration from './auth/Register';
import Login from './auth/Login';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import DestinationDetails from './components/DestinationDetails';
import DestinationCategory from './components/DestinationCategory';



export default class App extends Component {




  render(){
    return (
      <BrowserRouter>
          <Route path='/register' exact component={Registration}></Route>
          <Route path='/login' exact component={Login}></Route> 
          <Route path='/home' exact component={Home}></Route>
          <Route path='/destination/:id' component={DestinationDetails}></Route>
          <Route path='/destinations/:category' component={DestinationCategory}></Route>
      </BrowserRouter>      
    );
  }

}
