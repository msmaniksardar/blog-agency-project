import React from 'react';
import {Carousel} from "react-responsive-carousel";

const SliderComponent = () => {
    return (
        <Carousel>
            <div>
                <img src="../../assets/images/carouselOne.jpg" alt={"not found"}/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="../../assets/images/carouselTwo.jpg" alt={"not found"}/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="../../assets/images/carouselThree.jpg" alt={"not found"}/>
                <p className="legend">Legend 1</p>
            </div>
        </Carousel>
    );
};

export default SliderComponent;