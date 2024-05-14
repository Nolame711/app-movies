import Slider from "react-slick";
import "./carousel.css";

function Carousel({ children }){
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeigth:true,
        //slidesToShow: 5,
        slidesToScroll: 1,
    };

    return(
        <div>
            <Slider {...settings} > 
                { children } 
            </Slider>
        </div>
    );
}

export default Carousel;
