import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem ? true : false,
    };
    this.refreshPage = this.refreshPage.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ logged_in: true });
    } else {
      this.setState({ logged_in: false });
    }
    console.log(this.props.sup);
  }
  refreshPage(){
      window.location.reload(false);
  }

  render() {
    return <div onClick={this.refreshPage}>Ray</div>;
  }
}
