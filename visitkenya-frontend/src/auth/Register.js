import React,{ Component } from 'react';
import UserService from '../services/UserService';

const userService = new UserService();

export default class Registration extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          username:'',
          full_name:'' ,
          email:'' ,
          password:'' ,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      const value = event.target.value;
      this.setState({
        [event.target.name]:value,
      });
    }
    
    handleSubmit(event){
      this.handleRegisterUser();
      event.preventDefault();
    }

    handleRegisterUser(){
      userService.registerUser(this.state).then(response =>{ 
          alert('You have successfully registered.');
          this.props.history.push('/login');
      }).catch(()=>{
          alert('Fill the form correctly.');
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
                      <input type="text" value={this.state.full_name} onChange={this.handleChange} name='full_name' />
                    </div>
                    <div className="field">
                      <label>Username</label>
                      <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <button className="ui black basic button" type='submit'>Sign Up</button>
                  </form>
              </div>


              <div className="four wide column"></div>
            </div>
        );
    }
}
