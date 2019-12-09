import React, { Component } from "react";
import UserService from '../services/UserService';
import DestinationService from '../services/DestinationService';

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
    const all_destinations = ''; 
    
    destinationService.getDestinations()
    .then(
      response => console.log(response.data)
    )
    .catch(
      error => console.log(error)
    );

  }


  render() {
    return (
      <div>Ray</div>
    );
  }

}
