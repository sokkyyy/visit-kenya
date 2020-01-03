import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  {NavLink}  from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    root:{
        width:150,
        backgroundColor: theme.palette.background.paper,
        color:'black',
    },
}));

function SideNavOptions(props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <List component="nav" aria-label="destination category navigation">
                <ListItem button component={NavLink} to='/destinations/national_parks'>
                    <ListItemText primary='National Park' />
                </ListItem>
                <ListItem button  component={NavLink} to='/destinations/beaches'>
                  <ListItemText primary="Beaches" />
                </ListItem>
                <ListItem button  component={NavLink} to='/destinations/island'>
                  <ListItemText primary="Island Resorts" />
                </ListItem>
                <ListItem button component={NavLink} to='/destinations/cultural_sites'>
                  <ListItemText primary="Cultural Sites" />
                </ListItem>                

            </List>
        </div>
    )
}

export default class SideNav extends Component {

    render(){
        return(
            <div>
                {this.props.toggleSideNav ? <SideNavOptions /> : ''}
            </div>
        );
    }

}