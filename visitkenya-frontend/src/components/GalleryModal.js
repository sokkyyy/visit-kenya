import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// const imagelocation = 'http://localhost:8000';
const imagelocation =  'https://visitkenya.herokuapp.com' //PROD


export default class GalleryModal extends Component {


    render(){

        const { photoIndex, isOpen, images } = this.props;

        const allImages = images.map(image =>(imagelocation + image));


        return(
            <div>
                {isOpen && (
                    <Lightbox
                        mainSrc={allImages[photoIndex]}
                        nextSrc={allImages[(photoIndex + 1) % allImages.length]}
                        prevSrc={allImages[(photoIndex + allImages.length - 1) % allImages.length]}
                        onCloseRequest={this.props.closeModal}
                        onMovePrevRequest={this.props.movePrev}
                        onMoveNextRequest={this.props.moveNext}
                    />
                )}
            </div>
        );
    }
}
