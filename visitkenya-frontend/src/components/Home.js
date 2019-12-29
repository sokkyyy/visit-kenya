import React, { Component } from "react";
import DestinationList from './DestinationsList';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cover1 from '../images/vk5.jpg';
import cover2 from '../images/vk3.jpg';
import '../css/Home.css';
import Grid from '@material-ui/core/Grid';




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

      <Grid container spacing={3}>

        <Grid item xs={12} >
          <div>        
            <div className='carousel-overlay'>rerer</div>
            <Carousel 
              animation='slide' 
              dynamicHeight={true} 
              showArrows={false} 
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              transitionTime={800}
              interval={5000}
            >
              <img src={cover1} alt='intro' className='img1' style={{height:630}} />
              <img src={cover2} alt='intro2'className='img2' style={{height:630}} />
            </Carousel>
          </div>
        </Grid>

        <Grid item xs={6}>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>

        <div className='dest'>
          <DestinationList />
        </div>
      </div>
    );
  }

}
