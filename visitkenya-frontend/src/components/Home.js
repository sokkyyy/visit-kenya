import React, { Component } from "react";
import UserService from '../services/UserService';
import DestinationService from '../services/DestinationService';
import DestinationList from './DestinationsList';

const userService = new UserService();
const destinationService = new DestinationService();

export default class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      logged_in: localStorage.getItem ? true : false,
      destinations: '',
    };
  }

  componentDidMount() {   
    if (localStorage.getItem("token")) {
      this.setState({ logged_in: true });
    } else {
      this.setState({ logged_in: false });
    }

  }


  render() {
    return (
      <div>
        <DestinationList />
      </div>
    );
  }

}
