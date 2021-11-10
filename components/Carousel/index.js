import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {ArrowLeft , ArrowRight} from  "@mui/icons-material"
import {IconButton} from  "@mui/material"
class CarouselComponent extends Component {
    render() {
      const {children }  = this.props;
        return (
            <Carousel   showThumbs labels={{leftArrows : 'Left'}} {...this.props}>
                {children}
            </Carousel>
        );
    }
};

export default CarouselComponent;


