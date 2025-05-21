"use client";
import React from "react";
import FormComponent from "@/Component/English/Horoscopes/MajorComponent/FormComponent";
import SliderComponent from "@/Component/English/Horoscopes/MajorComponent/SliderComponent";
import StaticSignComponent from "@/Component/English/Horoscopes/StaticComponent/StaticSignComponent";
import TestimonialSlider from "@/Component/English/Horoscopes/StaticComponent/TestimonialSlider";
import Blogs_ArticlesComponent from "@/Component/English/Horoscopes/StaticComponent/Blogs_ArticlesComponent";
import RemediesCategory from "@/Component/English/Horoscopes/StaticComponent/RemediesCategory";
import FreeAstrologyComponent from "@/Component/English/Horoscopes/StaticComponent/FreeAstrologyComponent";

export default function HoroscopeHome({ data, error }) {
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

  const { testimonials, articles, blogs } = data;

  return (
    <>
      <div id="page-content">
        <SliderComponent  />

        <StaticSignComponent SignCategory="DailyHoroscope" />

        <FormComponent formCategory="Static" />
       

        <div className="avspeaks-promo">
          <div className="container">
            <div className="avs-promobanner">
              <div className="avs-promocnt">
                <div className="avs-left"></div>
                <div className="avs-rgt">
                  <p className="avs-offer">
                    Up to <span className="avs-offer-perc">75% OFF</span> on
                    Horoscope Readings
                  </p>
                  <p className="avs-btncnt">
                    Connect With Our Expert Astrologers
                  </p>
                  <div className="hero-btnsec">
                    <a
                      href={`${process.env.NEXT_PUBLIC_WEB_BASE}/astrovedspeaks/chat-with-astrologer?promo=SMO_HHChat`}
                      className="hero-btnchat"
                    >
                      <img
                        src="https://www.astroved.com/astrovedspeaks/assets/images/chat-astrologer-icon.svg"
                        alt="chat with astrologer"
                        width="33"
                        height="33"
                      />
                      Chat with Astrologer
                    </a>
                    <a
                      href={`${process.env.NEXT_PUBLIC_WEB_BASE}/astrovedspeaks/talk-to-astrologer?promo=SMO_HHTalk`}
                      className="hero-btnchat"
                    >
                      <img
                        src="https://www.astroved.com/astrovedspeaks/assets/images/talk-astrologer-icon.svg"
                        alt="talk to astrologer"
                        width="33"
                        height="33"
                      />
                      Talk to Astrologer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FreeAstrologyComponent />

        <RemediesCategory />

        <Blogs_ArticlesComponent articles={articles} blogs={blogs} />

        <TestimonialSlider testimonials={testimonials} />
      </div>
    </>
  );
}
