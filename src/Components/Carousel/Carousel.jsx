import './MyCarousel.css'
import {Carousel } from "react-bootstrap";

function MyCarousel({slides}) {


    return (
        <div className="MyCarouselContainer">
            <Carousel class="my-carousel">
                {slides.map((slide, index) => (
                    <Carousel.Item key={index} className={"carousel-item"}>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                        />
                        <Carousel.Caption class = "carousel-caption">
                            <h3>{slide.title}</h3>
                            <p>{slide.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default MyCarousel;
