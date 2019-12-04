import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Registration from './auth/Register';
import './App.css';

const BaseLayout = () => (
<div className="ui menu">
  <div className="header item" href='#'>
    VISIT KENYA
  </div>
  <a className="item" href='/register'>
    Register
  </a>
  <a className="item">
    
  </a>
  <a className="item">
    
  </a>

</div>
)

export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <BaseLayout />
        <Route path='/register' exact component={Registration}></Route>
      </BrowserRouter>
    );
  }
}