import React, { Component } from 'react';
import UserService from '../services/UserService';

const userService = new UserService();

export default class Login extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            username: '',
            password:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({
            [event.target.name]:value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        
        this.handleLogin();
    }

    handleLogin(){
        userService.loginUser(this.state).then(response => {
            localStorage.setItem('token',response.data.token);
            this.props.history.push('/');
        }).catch(()=>{
            alert('invalid credentials');
        })
    }

    render(){
        return(
            <div class="ui grid">
              <div class="four wide column"></div>
              <div class="four wide column"></div>
              <div class="four wide column"></div>
              <div class="four wide column"></div>
              <div class="four wide column"></div>


              <div class="eight wide column">
                <form className="ui form" onSubmit={this.handleSubmit}>

                    <div className="field">
                      <label>Username</label>
                      <input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="First Name" required/>
                    </div>

                    <div className="field">
                      <label>Password</label>
                      <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Last Name" required/>
                    </div>

                    <button className="ui button" type="submit">Submit</button>

                </form>
              </div>

              <div class="four wide column"></div>
            </div>
        );
    }
}