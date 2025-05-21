

"use client"

import React ,{useState,useEffect} from "react";
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; 
import { HoroscopesUrl } from "@/Component/Config/horoscopes";
import ArticlesComponent from "@/Component/English/Horoscopes/MajorComponent/ArticlesComponent";
import FormComponent from "@/Component/English/Horoscopes/MajorComponent/FormComponent";
import SliderComponent from "@/Component/English/Horoscopes/MajorComponent/SliderComponent";
import CategoryContentUrlComponent from "@/Component/English/Horoscopes/MajorComponent/CategoryContentUrlComponent";
import SignUrlComponent from "@/Component/English/Horoscopes/MajorComponent/SignUrlComponent";
import DynamicCategoryUrl from "@/Component/English/Horoscopes/MajorComponent/DynamicCategoryUrl";

export default function CategoryComponent({ data, error,}){
 
 
  const [viewType, setViewType] = useState(null);  
  //  const [selectedCategory, setSelectedCategory] = useState(null);
  

  
  useEffect(() => {
   
    const query = new URLSearchParams(window.location.search);
    const view = query.get('view');
    setViewType(view);
  }, []);  

  const handleOpen = () => {
    setViewType(false);
    
    const element = document.querySelector('.month-full-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


    if (error) {
        return (
          <div className="container">
          <h5
            style={{
              padding: "20px",
              borderTop: " 6px solid #00a8ff",
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
  
    const{ weekly_horoscopes,monthly_horoscopes, yearly_horoscopes,articles,} = data;

    
    const reversedMapping = Object.fromEntries(
      Object.entries(HoroscopesUrl.zodiacSignMapping).map(([key, value]) => [value, key])
    );
    const number = monthly_horoscopes[0].M_Sign;
    const signvalue=reversedMapping[number]
    const capitalizedSign = signvalue.charAt(0).toUpperCase() + signvalue.slice(1).toLowerCase();
   

    const date = new Date();

    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.getDay();
    
    // Calculate the start of the week (Sunday or Monday)
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - dayOfWeek); // Set to the most recent Sunday (if Sunday as start of week)
    
    // Calculate the end of the week (Saturday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    
    // Function to format the date as "Month Day, Year"
    function formatDate(date) {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
    
      // Get the suffix for the day (1st, 2nd, 3rd, 4th, etc.)
      const suffix = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
      const daySuffix = suffix[day % 10] || "th";
      
      return `${month} ${day}${daySuffix} ${year}`;
    }
    
    // Format both start and end dates
    const formattedStart = formatDate(startOfWeek);
    const formattedEnd = formatDate(endOfWeek); 
return(
    <>
       
    <div id="page-content">
 

    <SliderComponent  />
<div id="main-horoscope">

{viewType === 'full' ?(
           
<div className="append month-full-content">
<div className="container" id="WeeklyPrediction">
  <div className="dailyhorosope_sec">
    <div className="left-panel-fullview">
      <div className="horo-panel">
        <h2 className="week-head-txt">
          <img src={`../..${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}${signvalue}.webp`} />
          {capitalizedSign} Moon Sign Weekly Horoscope
        </h2>
        <div className="horo-title">
          {weekly_horoscopes &&
            Object.entries(weekly_horoscopes).map(([date, horoscope]) => (
              <>
              <div key={data}>
                <h3 className="week-head-txt">
                  {new Date(horoscope.CurrentDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  (Current Predictions will change after{" "}
                  {new Date(horoscope.EndDate).toLocaleTimeString([], {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  )
                </h3>
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}general-ico.png`} />
                <h3>General:</h3>
                <p>{horoscope.prediction_general}</p>
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-ico.png`} />
                <h3>Career:</h3>
                <p>{horoscope.prediction_career}</p>
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}love-ico.png`} />
                <h3>Love and Relationships:</h3>
                <p>{horoscope.prediction_relationship}</p>
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}money-ico.png`} />
                <h3>Money:</h3>
                <p>{horoscope.prediction_money}</p>
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}health-ico.png`} />
                <h3>Health:</h3>
                <p>{horoscope.prediction_health}</p>
                <div className="height30"></div>
                <div className="clear height20"></div>
                </div>
              </>
            ))}
             <div className="center">
      <div className="btn-hover1"><a href="javascript:void(0)" onClick={handleOpen} className="">Close</a></div>
   </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
          ) : (
            // After 3 seconds, show the full content
            <div className="container daily-first-wrap" >
    <div className="dailyhorosope_sec">
      <div className="left-panel daily-first-wrap">
                  <h1 className="horoscope-tittle"><img src={`../..${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}${signvalue}.webp`} alt="" className="left-sign-img"/> {capitalizedSign} Moon Sign Weekly Horoscope <span className="blue-light">
                <br/>({formattedStart}-{formattedEnd})
            </span>
            </h1>
           
          
        <div className="sign_daily_panel">
        <nav className="nav-bar-main">
             
             <a href={`${HoroscopesUrl.CategoryBase.YesterdayHoroscope}${signvalue}`} className="mob-hide">
                 {/* <i className="fa fa-angle-left icon" aria-hidden="true"></i> */}
                 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}yesterday.png`} width="16px" height="16px" alt="yesterday"/>
                 Yesterday
             </a>
               <a href={`${HoroscopesUrl.CategoryBase.DailyHoroscope}${signvalue}`} className="mob-hide">
               <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}today.png`} width="16px" height="16px" alt="today"/>
                 Today</a>
             <a href={`${HoroscopesUrl.CategoryBase.TomorrowHoroscope}${signvalue}`} className=" mob-hide">
             <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}tomorrow.png`} width="16px" height="16px" alt="tomorrow"/>
                 Tomorrow
             </a>
               <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}?view=full`} className="active">
               <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}weekly.png`} width="16px" height="16px" alt="weekly"/>
                 Weekly</a>
              <a href={`${HoroscopesUrl.CategoryBase.MonthlyHoroscope}${signvalue}?view=full`} className="mob-hide">
              <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}monthly.png`} width="16px" height="16px" alt="monthly"/>
                 Monthly</a>
               <a href={`${HoroscopesUrl.CategoryBase.YearlyHoroscope}${signvalue}?view=full`} className="mob-hide">
               <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}yearly.png`} width="16px" height="16px" alt="yearly"/>
                 Yearly</a>
             
                   
           </nav>
            <div className="desk-hide">
                <a href={`${HoroscopesUrl.CategoryBase.YesterdayHoroscope}${signvalue}`}>
                  <i className="fa fa-angle-left icon" aria-hidden="true"></i>
                  Yesterday
              </a>
               
              <a href={`${HoroscopesUrl.CategoryBase.TomorrowHoroscope}${signvalue}`}>
                  Tomorrow <i className="fa fa-angle-right icon" aria-hidden="true"></i>
              </a>
            </div>
        </div>
        <div className="clear height20"></div>
        <div className="horo-panel">
               <div className="horo-title">

               {weekly_horoscopes && Object.entries(weekly_horoscopes).map(([date, horoscope]) => (
                                 
                                    
                                    <p key={date}><strong>{date}</strong> {horoscope?.prediction_general||horoscope?.prediction_career||horoscope?.prediction_money||horoscope?.prediction_relationship||horoscope?.prediction_health}</p>
                                    
                                               ))}
                                            </div>
            </div>
            <div className="clear"></div>
            <hr/>
         
                               <DynamicCategoryUrl signvalue={signvalue} capitalizedSign={capitalizedSign} category="WeeklyHoroscope"/>
    
<div className="clear"></div>
<div className="strip-img">
 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
</div>
<div className="clear"></div>
             
  <SignUrlComponent category="WeeklyHoroscope"/>
  <div className="clear"></div>
<div className="strip-img">
 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
</div>
<div className="clear"></div>
      </div>
 
      <FormComponent formCategory="SlideForm"/>
    </div> 
  </div>
          )}

  

<div className="clear"></div>
  <div className="container">
    <div className="dailyhorosope_sec">
      <div className="left-panel">
    
<CategoryContentUrlComponent signvalue={signvalue} capitalizedSign={capitalizedSign} yearly_horoscopes={yearly_horoscopes} monthly_horoscopes={monthly_horoscopes}Category="MonthlyHoroscope" />
        <div className="clear"></div>
<div className="strip-img">
 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
</div>
<div className="clear"></div>
      </div>
    </div> 
  </div>

  <div className="yellow-bg">
    <div className="container">
      <div className="dailyhorosope_sec">
        <div className="left-panel">
        <CategoryContentUrlComponent signvalue={signvalue} capitalizedSign={capitalizedSign} yearly_horoscopes={yearly_horoscopes} monthly_horoscopes={monthly_horoscopes}Category="YearlyHoroscope" />
          
          <div className="clear"></div>
<div className="strip-img">
 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
</div>
<div className="clear"></div>
        </div>
       
      </div>
    </div>
  </div>
  
<ArticlesComponent articles={articles}/>
</div>
</div>

</>
)
}

