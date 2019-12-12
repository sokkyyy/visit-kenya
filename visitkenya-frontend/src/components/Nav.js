import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import '../css/Nav.css';





export default class Nav extends Component{

    render(){
        return(
            <div>


            </div>
        );
    }
}


// function Nav(props){
    // const logged_out_nav = (
    //   <div role="list" className="ui link list listLoggedOut" >
        // {/* <Link to='/login'>Sign In </Link> */}
        // {/* <Link to='/register'>Sign Up</Link> */}
    //   {/* </div> */}
    // );
//   
    // const logged_in_nav = (
    //   <div role="list" className="ui link list">
        // {/* <a role='listitem' className='item' onClick={props.logout_user}> Logout</a> */}
    //   {/* </div> */}
    // );
    // 
    // 
//   
    // return(
    //   <div className="ui menu">
        // {/* <div className="header item" href='#'> */}
        //   {/* VISIT KENYA */}
        // {/* </div> */}
        // {/* <a className="item" href='/register'> */}
        //   {/* Register */}
        // {/* </a> */}
        // {/* <div className="right menu"> */}
        //   {/* {props.logged_in ? logged_in_nav : logged_out_nav}       */}
        //   <Dropdown text='Account' options={dropdownOptionsAuth} simple item />
        // {/* </div> */}
    //   {/* </div>       */}
    // );
    // 
//   }