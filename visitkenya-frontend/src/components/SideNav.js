import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



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
                <ListItem button>
                  <ListItemText primary="National Parks" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Beaches" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Island Resorts" />
                </ListItem>
                <ListItem button>
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