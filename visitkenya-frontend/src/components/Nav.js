import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import '../css/Nav.css';





export default class Nav extends Component{

    render(){
        const logged_out_nav = (
            <div>
                <a href='/login'>Log In</a>
                <a href='/register'>Sign Up</a>
            </div>
        );

        const logged_in_nav = (
            <div>
                <a role='listitem' className='item' onClick={this.props.logout_user}> Logout</a> 
            </div>
        );

        return(
            <div>
                <AppBar position='fixed' color='inherit' className='navbar'>
                    <a variant='h6'>VISIT KENYA</a>
                    <a className='rightNav'>
                        {this.props.logged_in ? logged_in_nav : logged_out_nav}      
                    </a>
                </AppBar>


            </div>
        );
    }
}
