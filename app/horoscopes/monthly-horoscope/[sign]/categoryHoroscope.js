



"use client"
import React, { useState, useEffect } from "react";
import { HoroscopesUrl } from "@/Component/Config/horoscopes";
import ArticlesComponent from "@/Component/English/Horoscopes/MajorComponent/ArticlesComponent";
import SliderComponent from "@/Component/English/Horoscopes/MajorComponent/SliderComponent";
import FormComponent from "@/Component/English/Horoscopes/MajorComponent/FormComponent";
import SignUrlComponent from "@/Component/English/Horoscopes/MajorComponent/SignUrlComponent";
import CategoryContentUrlComponent from "@/Component/English/Horoscopes/MajorComponent/CategoryContentUrlComponent";
import CategorySignUrl from "@/Component/English/Horoscopes/MajorComponent/CategorySignUrl";
import DynamicCategoryUrl from "@/Component/English/Horoscopes/MajorComponent/DynamicCategoryUrl";
import MonthlyFullContent from "@/Component/English/Horoscopes/MonthlyComponent/MonthlyFullContent";




export default function CategoryComponent({ data, error }) {
 
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
  

  const {  monthly_horoscopes, yearly_horoscopes, articles ,monthly_category_horoscopes} = data;


  
  const reversedMapping = Object.fromEntries(
    Object.entries(HoroscopesUrl.zodiacSignMapping).map(([key, value]) => [value, key])
  );
  const number = monthly_horoscopes[0].M_Sign;
  const signvalue=reversedMapping[number]
  const capitalizedSign = signvalue.charAt(0).toUpperCase() + signvalue.slice(1).toLowerCase();

  const firstKey = Object.keys(monthly_category_horoscopes?.[0]?monthly_category_horoscopes[0]:monthly_horoscopes[0])[0];
   let modifiedKey = firstKey.length < 5 ? "General" : firstKey.replace('M_', '').replace(/_/g, ' & ');

  const date=new Date()
  
  const currentMonth = date.toLocaleString('default', { month: 'long' }); 
  date.setMonth(date.getMonth() + 1); // Add 1 month to the current date

const nextMonth = date.toLocaleString('default', { month: 'long' }); 
  const currentYear = date.getFullYear();



  return (
    <>
      <div id="page-content">
      <SliderComponent  />
            {viewType === 'full' ? (<>
            

<div id="main-horoscope">
<div className="append month-full-content">
<div className="container" id="MonthlyPrediction">
      <div className="dailyhorosope_sec">
       
          <MonthlyFullContent monthly_horoscopes={monthly_horoscopes} handleOpen={handleOpen} currentMonth={currentMonth} nextMonth={nextMonth} currentYear={currentYear}/>
          
          <FormComponent formCategory="SlideForm"/>
          </div>
   </div>
</div>





<div className="container">
    <div className="dailyhorosope_sec">
    <div className="left-panel">
 
<CategorySignUrl signvalue={signvalue} capitalizedSign={capitalizedSign}/>
      <div className="clear height20"></div>
    
           
      <CategoryContentUrlComponent signvalue={signvalue} capitalizedSign={capitalizedSign} yearly_horoscopes={yearly_horoscopes} monthly_horoscopes={monthly_horoscopes}Category="MonthlyHoroscope" />
             
            
        
            
            <div className="clear"></div>
<div className="strip-img">
 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
</div>

      </div>
      </div></div>

<div className="clear"></div>



<ArticlesComponent articles={articles}/>
</div>
            
            
            </>
             
            ) : (
              <>
             


<div id="main-horoscope">
<div className="append month-full-content">



<div className="container">
    <div className="dailyhorosope_sec">

          <div className="left-panel daily-first-wrap"  >
     
     <h1 className="horoscope-tittle">
       <img src={`../..${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}${signvalue}.webp`} alt="123" className="left-sign-img" /> {capitalizedSign} Moon Sign Monthly Horoscope <span className="blue-light">
         <br/>({currentMonth} {currentYear})
     </span>
 </h1>
           <div className="clear"></div>
 <div className="sign_daily_panel">

 
     <nav className="nav-bar-main">
             
             <a href={`${HoroscopesUrl.CategoryBase.YesterdayHoroscope}${signvalue}`}className="mob-hide">
                 {/* <i className="fa fa-angle-left icon" aria-hidden="true"></i> */}
                 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}yesterday.png`} width="16px" height="16px" alt="yesterday"/>
                 Yesterday
             </a>
               <a href={`${HoroscopesUrl.CategoryBase.DailyHoroscope}${signvalue}`} className=" mob-hide">
               <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}today.png`} width="16px" height="16px" alt="today"/>
                 Today</a>
             <a href={`${HoroscopesUrl.CategoryBase.TomorrowHoroscope}${signvalue}`} className=" mob-hide">
             <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}tomorrow.png`} width="16px" height="16px" alt="tomorrow"/>
                 Tomorrow
             </a>
               <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}?view=full`} className=" mob-hide">
               <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}weekly.png`} width="16px" height="16px" alt="weekly"/>
                 Weekly</a>
              <a href={`${HoroscopesUrl.CategoryBase.MonthlyHoroscope}${signvalue}?view=full`} className="active">
              <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}monthly.png`} width="16px" height="16px" alt="monthly"/>
                 Monthly</a>
               <a href={`${HoroscopesUrl.CategoryBase.YearlyHoroscope}${signvalue}?view=full`} className=" mob-hide">
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
 <div className="clear height10"></div>
<div className="horo-panel">
    <div className="horo-title">
            <p> <span className="orange">{capitalizedSign} {modifiedKey}:</span>&nbsp;&nbsp;</p>

            {monthly_category_horoscopes?.[0]?
          <>
          
           <p dangerouslySetInnerHTML={{__html:monthly_category_horoscopes[0]?.M_General||monthly_category_horoscopes[0]?.M_Love_Relationship||monthly_category_horoscopes[0]?.M_General||monthly_category_horoscopes[0]?.M_Money||monthly_category_horoscopes[0]?.M_Student||monthly_category_horoscopes[0]?.M_Health||monthly_category_horoscopes[0]?.M_Career||monthly_category_horoscopes[0]?.M_Business}} />
          




          <div className="height10"></div>
          <p><span className="orange">Auspicious dates:</span>&nbsp;&nbsp;{monthly_category_horoscopes[0].M_Auspicious_dates}</p>
          <p><span className="orange">Inauspicious dates:</span>&nbsp;&nbsp;{monthly_category_horoscopes[0].M_Inauspicious_dates}</p> 
          </>  : <>
           <p dangerouslySetInnerHTML={{__html:monthly_horoscopes[0]?.M_General||monthly_horoscopes[0]?.M_Love_Relationship||monthly_horoscopes[0]?.M_General||monthly_horoscopes[0]?.M_Money||monthly_horoscopes[0]?.M_Student||monthly_horoscopes[0]?.M_Health||monthly_horoscopes[0]?.M_Career||monthly_horoscopes[0]?.M_Business}} />
          




          <div className="height10"></div>
          <p><span className="orange">Auspicious dates:</span>&nbsp;&nbsp;{monthly_horoscopes[0].M_Auspicious_dates}</p>
          <p><span className="orange">Inauspicious dates:</span>&nbsp;&nbsp;{monthly_horoscopes[0].M_Inauspicious_dates}</p> 
          </>
          }
          
           
     </div>
</div>
   <div className="clear"></div>
   <hr/>                                                               
 <div className="clear"></div>
    <DynamicCategoryUrl signvalue={signvalue} capitalizedSign={capitalizedSign} category="MonthlyHoroscope"/>
<div className="clear"></div>
<div className="strip-img">
<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
</div>
<div className="clear"></div>

<SignUrlComponent category="YearlyHoroscope"/>

 </div>
 <FormComponent formCategory="SlideForm"/>

 </div>
 </div>

</div>




<div className="container">
    <div className="dailyhorosope_sec">
    <div className="left-panel">
<CategorySignUrl signvalue={signvalue} capitalizedSign={capitalizedSign}/>
      <div className="clear height20"></div>
           <CategoryContentUrlComponent signvalue={signvalue} capitalizedSign={capitalizedSign} yearly_horoscopes={yearly_horoscopes} monthly_horoscopes={monthly_horoscopes}Category="YearlyHoroscope" />
         

            <div className="clear"></div>
<div className="strip-img">
 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
</div>

      </div>
      </div></div>

<div className="clear"></div>



<ArticlesComponent articles={articles}/>
</div>
            
            
            </>
              
            )}
         
      </div>
    </>
  );
}





















