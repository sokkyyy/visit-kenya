import React, { Component } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';




//Refactor with a new navbar that will will parent of sidenav

export default class SideNav extends Component {
    // constructor(props){
        // super(props);
// 
    // }
    render(){
        return(
            <div>
                {this.props.toggleSideNav ? '' : <DehazeIcon fontSize='large' />}
            </div>
        );
    }

}