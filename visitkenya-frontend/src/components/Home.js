import React, { Component } from "react";
import DestinationList from './DestinationsList';
import Carousel from 'react-material-ui-carousel'; 
import cover1 from '../images/vk5.jpg';
import cover2 from '../images/vk3.jpg';
import '../css/Home.css';







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
        <div className='homeCarousel'>        
          <div className='test'>rrr</div>
          <Carousel animation='slide'>
            <img src={cover1} alt='intro' className='img1'></img>
            <img src={cover2} alt='intro2'className='img2'></img>
          </Carousel>
        </div>
        <div className='dest'>
          <DestinationList />
        </div>
      </div>
    );
  }

}
