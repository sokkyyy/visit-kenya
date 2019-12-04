import React,{ Component } from 'react';
import UserService from '../services/UserService';

const userService = new UserService();

export default class Registration extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        this.handleRegisterUser();
        event.preventDefault();
    }

    handleRegisterUser(){
        console.log(this.refs.password.value);
        userService.registerUser({
            'username': this.refs.username.value,
            'full_name':this.refs.fullName.value,
            'email':this.refs.email.value,
            'password':this.refs.password.value,
        }).then(response => 
            alert('You have successfully registered.')
        ).catch(()=>{
            alert('Fill the form correctly.')
        });
    }

    render(){
        return(
            <div className="ui grid">
              <div className="four wide column"></div>
              <div className="four wide column"></div>
              <div className="four wide column"></div>
              <div className="four wide column"></div>
              <div className="four wide column"></div>
              
              {/* Registration Form */}
              <div className="eight wide column">
                  <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className="field">
                      <label>Full Name</label>
                      <input type="text" name="first-name" placeholder="First Name" ref='fullName' />
                    </div>
                    <div className="field">
                      <label>Username</label>
                      <input type="text" name="first-name" placeholder="First Name" ref='username' />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input type="email" name="first-name" placeholder="First Name" ref='email' />
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <input type="password" name="first-name" placeholder="First Name" ref='password' />
                    </div>
                    <button className="ui black basic button" type='submit'>Sign Up</button>
                  </form>
              </div>


              <div className="four wide column"></div>
            </div>
        );
    }
}
