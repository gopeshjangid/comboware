import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselComponent extends Component {
    render() {
      const {children }  = this.props;
        return (
            <Carousel {...this.props}>
                {children}
            </Carousel>
        );
    }
};

export default CarouselComponent;


