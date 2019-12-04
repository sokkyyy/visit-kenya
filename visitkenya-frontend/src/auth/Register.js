import React,{ Component } from 'react';
import UserService from '../auth/Register';

const userService = new UserService();

export default class Registration{
    constructor(){
        super(props);

    }
    render(){
        return(
            <div className="ui grid">
              <div className="four wide column"></div>
              <div className="four wide column"></div>
              <div className="four wide column"></div>
              <div className="four wide column"></div>
              <div className="four wide column"></div>
              <div className="eight wide column"></div>
              <div classNamess="four wide column"></div>
            </div>
        );
    }
}
