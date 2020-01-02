import React, { Component } from "react";
import DestinationList from './DestinationsList';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cover1 from '../images/vk5.jpg';
import cover2 from '../images/vk3.jpg';
import topLeft from '../images/topLeft.png';
import topRight from '../images/topRight.png';
import bottomLeft from '../images/bottomLeft.png';
import bottomRight from '../images/bottomRight.png';
import triangle from '../images/triangle.png';
import parks from '../images/am3.jpg';
import beach from '../images/wat3.jpg';
import island from '../images/chale_resort.jpeg';
import cultural from '../images/cult.jpeg';
import '../css/Home.css';
import Grid from '@material-ui/core/Grid';
import Nav from './Nav';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'; 
import { GridList } from "@material-ui/core";
import Footer from './Footer';



function CarouselOverlay(props){
  return(
    <div className='carousel-overlay'>
      <img src={topLeft} alt='topLeft' />
      <h1 className='logo-brand'>VISIT KENYA</h1>
      <img src={topRight} alt='topRight' className='topRight' />
      <img src={bottomLeft} alt='bottomLeft' className='bottomLeft' />
      <img src={bottomRight} alt='bottomRight' className='bottomRight' />
      <img src={triangle} alt='triangle' className='triangle' onClick={props.navigateDown} style={{cursor:'pointer'}} />
    </div>
  )
}




export default class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      navVisible:false,
    };
    this.myRef = React.createRef();
    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    const pageHeight = window.pageYOffset;
    if(pageHeight > 150){
      this.setState({navVisible:true});
    }else{
      this.setState({navVisible:false});
    }
  }
  
  handleNavigate(){
    //Scroll to this.myRef
    window.scrollTo(0, this.myRef.current.offsetTop);
  }


  render() {


    return (
      <div>
      
   
      <Slide direction="up" in={this.state.navVisible} mountOnEnter unmountOnExit>
        <Nav />
      </Slide> 


      <Grid container spacing={3}>

        <Grid item xs={12} >
          <div>        
            <CarouselOverlay navigateDown={this.handleNavigate} />
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

        <Grid item xs={12} ref={this.myRef}>
          <div className='about-us'>
            <Paper elevation={0 } > 
              <Typography variant='h4' className='about-heading'>Visit Our Country</Typography>
              <hr className='line-separator' />
              <p className='about-description'>
                Tourism in Kenya is the second-largest source of foreign exchange revenue following agriculture.<br />
                Beach tourism, eco-tourism, cultural tourism, and sports tourism are all part of the tourism sector in Kenya.<br />
                Visit Kenya aims to bridge the gap between tourists and the popular tourist destinations in Kenya by allowing<br /> 
                them to familiarize with these places. You can find our categories below.<br />  
              </p>
            </Paper>  
          </div>

        </Grid>
{/* 
        <Grid item xs={12}>
          <div className='dest' >
            <DestinationList />
          </div>
        </Grid> */}
        
        <Grid item xs={12} style={{marginTop: 50}}>
          <Carousel
            dynamicHeight={true} 
            showArrows={true} 
            showStatus={true}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            transitionTime={1000}
            interval={8000}
            
          >

            <div className='category-box'>
              <Grid item xs={6}>
                <div className='category-description' >
                  <h5>National Parks</h5>
                  <p>
                    With a desirable global reputation, Kenya is home to the “Big Five”.<br />
                    It has incredibly beautiful national parks with savannah grasslands, <br />
                    majestic animals, unique plants and the most picturesque views. <br />
                    There are so many ways to enjoy a Kenyan safari, <br />
                    including visiting national parks to see animals in their natural habitats. <br />
                    Each of these national parks have a unique character and feel, <br />
                    so take out your cameras and get ready to capture and explore! <br />
                  </p>
                  <button>View Destinations</button>
                </div>
              </Grid>
              <Grid item xs={6}>
                <img src={parks} alt='park' className='home-category' width='300' />
              </Grid>
            </div>

            <div className='category-box'>

              <Grid item xs={6}>
                <img src={beach} alt='beach' className='home-category' />
              </Grid>

              <Grid item xs={6}>
                <div className='category-description' >
                  <h5>Beaches</h5>
                  <p>
                    Despite the powder-soft sand and seawater that runs a dozen shades of blue, <br />
                    Beaches on Kenya's Indian Ocean coast always has you looking skyward.<br />
                    Most of Kenya's best beaches are located just north and south of Mombasa in the southeast. <br />
                    The northeast shore is virtually deserted except for exotic Lamu Island and a few hideaways around Mambrui. <br />
                    There's enough breeze for sailing and wind-powered adventure sports, <br />
                    but not so much that it's going to blow you away. <br />
                  </p>
                  <button>View Destinations</button>
                </div>
              </Grid>
            </div>

            <div className='category-box'>
              <Grid item xs={6}>
                <div className='category-description' >
                  <h5>Cultural Sites</h5>
                  <p>
                    Kenya is proud to be home to 6 unique world heritage sites identified by <br />
                    The United Nations Educational Scientific and Cultural Organization (UNESCO). <br />
                    Clustered in different categories, these sites have been identified precisely because of their <br />
                    cultural, historical, natural and archaeological value. <br />
                    These world heritage sites combine to form the ultimate quintessence of the nation. <br />
                  </p>
                  <button>View Destinations</button>
                </div>
                
              </Grid>

              <Grid item xs={6}>
                <img src={cultural} alt='cultural' className='home-category' />
              </Grid>

            </div>

            <div className='category-box'>
              <Grid item xs={6}>
                <img src={island} alt='island' className='home-category' />
              </Grid>
              
              <Grid item xs={6}>
                <div className='category-description'>
                  <h5>Island Resorts</h5>
                  <p>
                    The Kenyan coast is riddled by many of these tiny islands and headlands <br />
                    along The Indian Ocean. What might come as a surprise <br />
                    is that there are many other islands that can be found inland.<br />
                    Almost every one of these inland islands is just as beautiful, <br />
                    if not more, than the ones found at the coast. <br />
                    From Naivasha to Kisumu and all the way up to the North,<br />
                    Island Resorts can be found.<br />
                  </p>
                  <button>View Destinations</button>
                </div>
              </Grid>
            </div>
          </Carousel>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>

      </Grid>


      </div>
    );
  }

}
