import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import DehazeIcon from '@material-ui/icons/Dehaze';
import '../css/Nav.css';
import { makeStyles } from '@material-ui/core/styles';
import SideNav from './SideNav';



const useStyles = makeStyles(theme => ({
    toggleNav: {
        transition: theme.transitions.create(['transform'],{
            duration:theme.transitions.duration.short
        })
    },
    toggleNavOpen:{
        transform: 'rotate(-180deg)'
    },
    toggleNavClose:{
        tranform: 'rotate(0)'
    }


}));

function SideNavToggle(props){
    const classes = useStyles();
    return(
        <DehazeIcon 
            fontSize='large' 
            onClick={props.toggleNav}
            className={[classes.toggleNav, props.toggleSideNav ? classes.toggleNavOpen : classes.toggleNavClose]}

        />

    );
}


export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            toggleSideNav:false,
            logged_in: localStorage.getItem('token') ? true : false,
        };
        this.handleToggleSideNav = this.handleToggleSideNav.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        localStorage.removeItem('token');
        this.setState({logged_in:false});
        this.props.history.push('/login');
    }

    handleToggleSideNav(){
        const toggle = !this.state.toggleSideNav
        this.setState({toggleSideNav:toggle});
    }

    render(){
        const logged_out_nav = (
            <div>
                <a href='/login'>Log In</a>
                <a href='/register'>Sign Up</a>
            </div>
        );

        const logged_in_nav = (
            <div>
                <a role='listitem' className='item' onClick={this.handleLogout}> Logout</a> 
            </div>
        );

        return(
            <div>
                <AppBar position='fixed' color='inherit' style={{height:50}}>
                    <div className='navbar'>
                        <SideNavToggle toggleNav={this.handleToggleSideNav} toggleSideNav={this.state.toggleSideNav} />
                        <a variant='h6' href='/home'>VISIT KENYA</a>
                        <div className='rightNav'>
                            {this.state.logged_in ? logged_in_nav : logged_out_nav}      
                        </div>
                    </div>
                </AppBar>
                <div className='sideNav'>
                    <SideNav toggleSideNav={this.state.toggleSideNav} />
                </div>
            </div>
        );
    }
}
