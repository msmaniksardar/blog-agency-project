import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default carousel styles
import carouseOne from "../../assets/images/carouselOne.jpg";
import carouselTwo from "../../assets/images/carouselTwo.jpg";
import carouselThree from "../../assets/images/carouselThree.jpg";

const SliderComponent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 min-h-screen ">
            {/*<div className="flex justify-center items-center">*/}
            {/*    <Carousel*/}
            {/*        autoPlay={true}*/}
            {/*        interval={3000} // Set a 5-second interval for each slide*/}
            {/*        showStatus={false}*/}
            {/*        showThumbs={false}*/}
            {/*        useKeyboardArrows={true}*/}
            {/*        swipeable={true}*/}
            {/*        dynamicHeight={false} // Keeps the height constant for all slides*/}
            {/*        infiniteLoop={true} // Loop the carousel infinitely*/}
            {/*    >*/}
            {/*        <div className="carousel-item-style">*/}
            {/*            <img src={carouseOne} alt="Carousel Slide 1" className="w-full h-auto object-cover rounded-lg"/>*/}
            {/*        </div>*/}
            {/*        <div className="carousel-item-style">*/}
            {/*            <img src={carouselTwo} alt="Carousel Slide 2"*/}
            {/*                 className="w-full h-auto object-cover rounded-lg"/>*/}
            {/*        </div>*/}
            {/*        <div className="carousel-item-style">*/}
            {/*            <img src={carouselThree} alt="Carousel Slide 3"*/}
            {/*                 className="w-full h-auto object-cover rounded-lg"/>*/}
            {/*        </div>*/}
            {/*    </Carousel>*/}
            {/*</div>*/}
            <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">Blog Title</h1>
                <p className="mt-4 text-center text-lg sm:text-xl">Short description of the blog goes here.</p>
                <button
                    className="mt-5 w-52 sm:w-60 p-3 text-white bg-orange-500 hover:bg-white hover:text-black border-2 border-orange-500 transition-all duration-300"
                >
                    Details
                </button>
            </div>

        </div>
    );
};

export default SliderComponent;
