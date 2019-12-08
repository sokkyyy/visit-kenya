import React, { Component } from "react";
import UserService from '../services/UserService';

const userService = new UserService();


export default class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      logged_in: localStorage.getItem ? true : false,
    };
  }

  componentDidMount() {   
    if (localStorage.getItem("token")) {
      this.setState({ logged_in: true });
    } else {
      this.setState({ logged_in: false });
    }

    if (this.state.logged_in) {
      userService.getUser()
      .then(
        response => console.log(response.data)
      ).catch(
        error => console.log(error)
      );
    }
  }


  render() {
    return <div onClick={this.refreshPage}>Ray</div>;
  }
}
