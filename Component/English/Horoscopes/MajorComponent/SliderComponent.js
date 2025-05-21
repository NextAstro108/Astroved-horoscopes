
// "use client"

// import { useEffect, useState } from "react";
// import {getUserTimeZone,getCurrencyInfo} from "@/Component/English/Horoscopes/DateFunctions/FrontEndDateFunction"

// export default function SliderComponent() {
//   const [slider,setSlider] =useState([])
//   const [isHovered, setIsHovered] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0); // Track the current active index
//   const [loading, setLoading] = useState(true);
//   const generateUrl = (redirect_page) => {
//     return `${redirect_page.replace(process.env.NEXT_PUBLIC_WEB_BASE, "")}`;
//   };
//   const timezone = getUserTimeZone();
//   const currency=getCurrencyInfo(timezone)
//   const currencyValue=currency.currencycode

//   useEffect(()=>{
//    FetchSlider()
// },[])
// const FetchSlider=async()=>{
// try {
//   setLoading(true);
  
//   const response= await fetch(`${process.env.NEXT_PUBLIC_SLIDER_HOROSCOPE}${currencyValue}`,{
//      cache: 'no-store'
//   })
//   if(response.ok){
//     const result = await response.json()
//     setSlider(result.slider_output)
    
//   }
// } catch (error) {
//   console.log(error,"error console")
// }finally {
//   setLoading(false);  // Set loading to false once data is fetched or error occurs
// }
// }



//   useEffect(() => {
//     const carouselItems = document.querySelectorAll(".carousel .carousel-inner .item");


//     const moveToNextSlide = () => {
//       if (isHovered) return; // Skip if it's hovered

//       // Remove 'active' class from all items
//       carouselItems.forEach(item => item.classList.remove("active"));

//       // Calculate the next index
//       const nextIndex = (currentIndex + 1) % carouselItems.length;

//       carouselItems[nextIndex].classList.add("active");

//       // Update the current index state
//       setCurrentIndex(nextIndex);
//     };

//     // Set an interval to auto-cycle the slides
//     const id = setInterval(moveToNextSlide, 3000);

//     // Clean up the interval when the component is unmounted
//     return () => clearInterval(id);
//   }, [isHovered, currentIndex,slider]); // Add currentIndex as a dependency

//   // Event handlers to pause/resume the carousel on hover
//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   // Function to navigate to the next slide
//   const nextSlider = () => {
//     const nextIndex = (currentIndex + 1) % slider.length;
//     setCurrentIndex(nextIndex);
//     updateCarousel(nextIndex);
//   };

//   // Function to navigate to the previous slide
//   const previousSlider = () => {
//     const prevIndex = (currentIndex - 1 + slider.length) % slider.length;
//     setCurrentIndex(prevIndex);
//     updateCarousel(prevIndex);
//   };

//   // Function to update the active slide
//   const updateCarousel = (index) => {
//     const carouselItems = document.querySelectorAll(".carousel .carousel-inner .item");
//     carouselItems.forEach(item => item.classList.remove("active")); // Remove 'active' class from all items
//     carouselItems[index].classList.add("active"); // Add 'active' class to the selected item
//   };

//   return (
//     <>
//      {loading ? ""
//     //  <div className="loading-slider-spinner">
                   
//     //                <p>Loading...</p>
//     //            </div>
               
//                :
//       <div
//       className="horo-slide-banner"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div
//         id="myCarousel-slider"
//         className="carousel slide carousel-fade"
//         data-ride="carousel"
//       >
//         <div className="carousel-inner" role="listbox">
//           {slider.map((data, index) => (
//             <div
//               className={`item ${index === currentIndex ? 'active' : ''}`}
//               key={index}
//             >
//               <a href={generateUrl(data.redirect_page)}>
//                 <picture>
                
//                   <source media="(max-width: 767px)" srcSet={data.small_image} />
                
//                   <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={data.medium_image} />
                
//                   <source media="(min-width: 1024px)" srcSet={data.big_image} />
                 
//                   <img
//                     className="data-img"
//                     src={data.big_image}
//                     alt={data.alt}
//                   />
//                 </picture>
//               </a>
//             </div>
//           ))}
//         </div>

//         <a
//           className="carousel-control left"
//           data-target="#myCarousel-slider"
//           data-slide="prev"
//           onClick={previousSlider}
//         ></a>
//         <a
//           className="carousel-control right"
//           data-target="#myCarousel-slider"
//           data-slide="next"
//           onClick={nextSlider} 
//         ></a>
//       </div>
//     </div>}
    
//     </>
//   );
// }





"use client"

import { useEffect, useState } from "react";
import {getUserTimeZone,getCurrencyInfo} from "@/Component/English/Horoscopes/DateFunctions/FrontEndDateFunction"

export default function SliderComponent() {
  const [slider, setSlider] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showSlider, setShowSlider] = useState(false); // New state to control visibility

  const generateUrl = (redirect_page) => {
    return `${redirect_page.replace(process.env.NEXT_PUBLIC_WEB_BASE, "")}`;
  };
  
  const timezone = getUserTimeZone();
  const currency = getCurrencyInfo(timezone);
  const currencyValue = currency.currencycode;

  useEffect(() => {
    FetchSlider();
    
    // Set a timeout to show the slider after 10 seconds
    const timer = setTimeout(() => {
      setShowSlider(true);
    }, 3000); // 10 seconds in milliseconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  const FetchSlider = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_SLIDER_HOROSCOPE}${currencyValue}`, {
        cache: 'no-store'
      });
      
      if (response.ok) {
        const result = await response.json();
        setSlider(result.slider_output);
      }
    } catch (error) {
      console.log(error, "error console");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!showSlider || slider.length === 0) return;

    const carouselItems = document.querySelectorAll(".carousel .carousel-inner .item");

    const moveToNextSlide = () => {
      if (isHovered) return;

      carouselItems.forEach(item => item.classList.remove("active"));
      const nextIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[nextIndex].classList.add("active");
      setCurrentIndex(nextIndex);
    };

    const id = setInterval(moveToNextSlide, 3000);
    return () => clearInterval(id);
  }, [isHovered, currentIndex, slider, showSlider]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const nextSlider = () => {
    const nextIndex = (currentIndex + 1) % slider.length;
    setCurrentIndex(nextIndex);
    updateCarousel(nextIndex);
  };

  const previousSlider = () => {
    const prevIndex = (currentIndex - 1 + slider.length) % slider.length;
    setCurrentIndex(prevIndex);
    updateCarousel(prevIndex);
  };

  const updateCarousel = (index) => {
    const carouselItems = document.querySelectorAll(".carousel .carousel-inner .item");
    carouselItems.forEach(item => item.classList.remove("active"));
    carouselItems[index].classList.add("active");
  };

  return (
    <>
      {loading ? (
        ""
      ) : showSlider ? (
        <div
          className="horo-slide-banner"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            id="myCarousel-slider"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox" aria-label="Image carousel">
              {slider.map((data, index) => (
                <div
                  className={`item ${index === currentIndex ? 'active' : ''}`}
                  key={index}
                  role="option"
                  aria-selected={index === currentIndex}
                  aria-label={`Slide ${index + 1} of ${slider.length}`}
                >
                  <a href={generateUrl(data.redirect_page)} tabIndex="-1">
                    <picture>
                      <source media="(max-width: 767px)" srcSet={data.small_image} />
                      <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={data.medium_image} />
                      <source media="(min-width: 1024px)" srcSet={data.big_image} />
                      <img
                        className="data-img"
                        src={data.big_image}
                        alt={data.alt}
                        loading="lazy"
                      />
                    </picture>
                  </a>
                </div>
              ))}
            </div>

            <a
              className="carousel-control left"
              data-target="#myCarousel-slider"
              data-slide="prev"
              onClick={previousSlider}
            ></a>
            <a
              className="carousel-control right"
              data-target="#myCarousel-slider"
              data-slide="next"
              onClick={nextSlider} 
            ></a>
          </div>
        </div>
      ) : null}
    </>
  );
}






