

import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// Slick Slider settings for autoplay
const settings = {
    dots: true,             // Show dots for navigation
    infinite: true,         // Infinite looping of slides
    speed: 500,             // Speed of slide transition
    autoplay: true,         // Enable automatic sliding
    autoplaySpeed: 3000,    // Set the time between each slide transition (in ms)
    slidesToShow: 1,        // Show one slide at a time
    slidesToScroll: 1,      // Scroll one slide at a time
  };
  

export default function TestimonialSlider({testimonials}){

    return(<>
    
    <div className="av-testimonials">
      <div className="container">
        <h3 className="main-title">CUSTOMER TESTIMONIALS</h3>
        <hr className="horo-hr" />
        <div className="testi-slider">
          <Slider {...settings}>
            {testimonials.map((post, index) => (
              <div key={index} className="testi-box">
                <p className="test-txt">{post.content}</p>
                <p className="testi-peoples">{post.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </>)
}