

"use client"
import React from "react";
import FormComponent from "@/Component/English/Horoscopes/MajorComponent/FormComponent";
import RemediesCategory from "@/Component/English/Horoscopes/StaticComponent/RemediesCategory";
import TestimonialSlider from "@/Component/English/Horoscopes/StaticComponent/TestimonialSlider";
import Blogs_ArticlesComponent from "@/Component/English/Horoscopes/StaticComponent/Blogs_ArticlesComponent";
import FreeAstrologyComponent from "@/Component/English/Horoscopes/StaticComponent/FreeAstrologyComponent";
import TalkToAstrologerComponent from "@/Component/English/Horoscopes/StaticComponent/TalkToAstrologerComponent";
import StaticSignComponent from "@/Component/English/Horoscopes/StaticComponent/StaticSignComponent";
import SliderComponent from "@/Component/English/Horoscopes/MajorComponent/SliderComponent";


export default function CategoryComponent({ data, error }){
    if (error) {
        return (
          <div className="container">
          <h5
            style={{
              padding: "20px",
              borderTop: "6px solid #00a8ff",
              marginTop: "20px",
              fontWeight: "normal",
              fontSize: "1.25rem",
              borderRadius: "5px",
            }}
          >
            No posts found
          </h5>
        </div>
        );
      }
    
      if (!data) {
        return (
          <div className="container">
            <h5
              style={{
                padding: "20px",
                borderTop: "6px solid #00a8ff",
                marginTop: "20px",
                fontWeight: "normal",
                fontSize: "1.25rem",
                borderRadius: "5px",
              }}
            >
              No posts found
            </h5>
          </div>
        );
      }
  
    const{ astrologer_banner, articles, blogs, testimonials } = data;
   

   
return(
    <>
<div id="page-content">
 <SliderComponent  />


    <StaticSignComponent SignCategory="MonthlyHoroscope"/>


<FormComponent formCategory="Static"/>

<TalkToAstrologerComponent astrologer_banner={astrologer_banner}/>

<FreeAstrologyComponent/>



<RemediesCategory/>

<Blogs_ArticlesComponent articles={articles} blogs={blogs}/>

   
	<TestimonialSlider testimonials={testimonials} />


  </div>
</>
)
}