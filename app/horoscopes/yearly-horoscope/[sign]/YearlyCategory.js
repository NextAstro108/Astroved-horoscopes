


"use client"

import React, { useState,useEffect } from "react";
import ArticlesComponent from "@/Component/English/Horoscopes/MajorComponent/ArticlesComponent";
import { HoroscopesUrl } from "@/Component/Config/horoscopes";
import SliderComponent from "@/Component/English/Horoscopes/MajorComponent/SliderComponent";
import FormComponent from "@/Component/English/Horoscopes/MajorComponent/FormComponent";
import CategoryContentUrlComponent from "@/Component/English/Horoscopes/MajorComponent/CategoryContentUrlComponent";
import CategorySignUrl from "@/Component/English/Horoscopes/MajorComponent/CategorySignUrl";
import SignUrlComponent from "@/Component/English/Horoscopes/MajorComponent/SignUrlComponent";
import DynamicCategoryUrl from "@/Component/English/Horoscopes/MajorComponent/DynamicCategoryUrl";
import CurrentYearComponent from "@/Component/English/Horoscopes/YearlyComponent/CurrentYearComponent";

export default function YearlyCategory({data,error}){
    

    const [viewType, setViewType] = useState(null);  
  
    
    useEffect(() => {
     
      const query = new URLSearchParams(window.location.search);
      const view = query.get('view');
      const hash = window.location.hash;
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
      const {yearly_horoscopes,monthly_horoscopes,articles,yearly_category_horoscopes}=data

      const reversedMapping = Object.fromEntries(
        Object.entries(HoroscopesUrl.zodiacSignMapping).map(([key, value]) => [value, key])
      );
      const number = yearly_horoscopes[0].Y_Sign;
      const signvalue=reversedMapping[number]
      const capitalizedSign = signvalue.charAt(0).toUpperCase() + signvalue.slice(1).toLowerCase();
     
      const date=new Date()
  
      const currentMonth = date.toLocaleString('default', { month: 'long' }); 
      const currentYear = date.getFullYear();
      const NextYear = date.getFullYear()+1;


      const firstKey = Object.keys(yearly_category_horoscopes?.[0]?yearly_category_horoscopes[0]:yearly_horoscopes[0])[0];
      
      let modifiedKey = firstKey.length < 5 ? "General" : firstKey.replace('Y_', '').replace(/_/g, ' & ');
    


    
    
    return(<>
   <div id="page-content">
   {viewType ==='full' ? (<>
   <SliderComponent  />
   <div id="main-horoscope">
   <div className="append month-full-content"></div>
   <div className="container">
      <div className="dailyhorosope_sec">
         
         <FormComponent formCategory="SlideForm"/>
         <CurrentYearComponent  capitalizedSign={capitalizedSign} yearly_horoscopes={yearly_horoscopes} handleOpen={handleOpen} currentYear={currentYear}/>
        
      </div>
   </div>
   	   <a name="2025"></a>
   
	      <div className="clear height20"></div>
   <div className="clear"></div>
   <div className="container">
      <div className="dailyhorosope_sec">
         <div className="left-panel">
           

            <div className="clear height20"></div>
           
            <CategoryContentUrlComponent signvalue={signvalue} capitalizedSign={capitalizedSign} yearly_horoscopes={yearly_horoscopes} monthly_horoscopes={monthly_horoscopes}Category="MonthlyHoroscope"/>
            <div className="clear"></div>
            <div className="strip-img">
               <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
            </div>
            <div className="clear"></div>
         </div>
        
      </div>
   </div>
   <ArticlesComponent articles={articles}/>
  
</div>
</>):(<>
    <SliderComponent  />
<div id="main-horoscope">
<div className="append month-full-content"></div>
<div className="container">
   <div className="dailyhorosope_sec">
      <div className="left-panel daily-first-wrap" >
         <div className="">
            <h1 className="horoscope-tittle"><img src={`../..${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}${signvalue}.webp`} alt="" className="left-sign-img"/> {capitalizedSign} Moon Sign Yearly Horoscope <span className="blue-light">
               <br/>({currentYear})
               </span>
            </h1>
                           <div className="clear"></div>
            <div className="sign_daily_panel">
            <nav className="nav-bar-main">
             
             <a href={`${HoroscopesUrl.CategoryBase.YesterdayHoroscope}${signvalue}`} className="mob-hide">
                 {/* <i className="fa fa-angle-left icon" aria-hidden="true"></i> */}
                 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}yesterday.png`} width="16px" height="16px" alt="yesterday"/>
                 Yesterday
             </a>
               <a href={`${HoroscopesUrl.CategoryBase.DailyHoroscope}${signvalue}`}  className="mob-hide">
               <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}today.png`} width="16px" height="16px" alt="today"/>
                 Today</a>
             <a href={`${HoroscopesUrl.CategoryBase.TomorrowHoroscope}${signvalue}`} className=" mob-hide">
             <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}tomorrow.png`} width="16px" height="16px" alt="tomorrow"/>
                 Tomorrow
             </a>
               <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}?view=full`} className="mob-hide">
               <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}weekly.png`} width="16px" height="16px" alt="weekly"/>
                 Weekly</a>
              <a href={`${HoroscopesUrl.CategoryBase.MonthlyHoroscope}${signvalue}?view=full`} className="mob-hide">
              <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}monthly.png`} width="16px" height="16px" alt="monthly"/>
                 Monthly</a>
               <a href={`${HoroscopesUrl.CategoryBase.YearlyHoroscope}${signvalue}?view=full`} className="active">
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
                      <p><span className="orange">{capitalizedSign} {modifiedKey}:</span>&nbsp;&nbsp; </p>
                    {/* <p dangerouslySetInnerHTML= {{__html:yearly_horoscopes[0]?.Y_General||yearly_horoscopes[0]?.Y_Career||yearly_horoscopes[0]?.Y_Finance||yearly_horoscopes[0]?.Y_Student||yearly_horoscopes[0]?.Y_Love_Relationship||yearly_horoscopes[0]?.Y_Health} }/> */}
                   {yearly_category_horoscopes?.[0]?<>
                     <p dangerouslySetInnerHTML= {{__html:yearly_category_horoscopes[0]?.Y_General||yearly_category_horoscopes[0]?.Y_Career||yearly_category_horoscopes[0]?.Y_Finance||yearly_category_horoscopes[0]?.Y_Student||yearly_category_horoscopes[0]?.Y_Love_Relationship||yearly_category_horoscopes[0]?.Y_Health} }/>                      
                      
                   </>:<>
                   <p dangerouslySetInnerHTML= {{__html:yearly_horoscopes[0]?.Y_General||yearly_horoscopes[0]?.Y_Career||yearly_horoscopes[0]?.Y_Finance||yearly_horoscopes[0]?.Y_Student||yearly_horoscopes[0]?.Y_Love_Relationship||yearly_horoscopes[0]?.Y_Health} }/>                      
                      
                   </>}
                   
                                                         
               </div>
            </div>
            <hr/>
           
               <DynamicCategoryUrl signvalue={signvalue} capitalizedSign={capitalizedSign} category="YearlyHoroscope"/>
            <div className="clear"></div>
            <hr/>
            
            <div className="strip-img">
               <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
            </div>
            <div className="clear"></div>
           <SignUrlComponent category="YearlyHoroscope"/>
            <div className="clear"></div>
            <div className="strip-img">
               <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
            </div>
            <div className="clear"></div>
         </div>
      </div>
      <FormComponent  formCategory="SlideForm"/>
      <div className="left-panel">
         <div className="horo-panel">
          

<div className="horo-title">
               <h2 className="horoscope-tittle center color-orange">Yearly Horoscope {currentYear}</h2>
               <h2>Characteristics of the {capitalizedSign}:</h2>
               <p>{yearly_horoscopes[0].Y_Characteristics}</p>
             
               
               <div className="height30"></div>
               <h2>Remedies:</h2>

               <p dangerouslySetInnerHTML={{__html:yearly_horoscopes[0].Y_Remedies}}/>
                 
               <p>Please click the following links to know in detail about the remedy and to order the same.</p>
               <h2>


                 <div dangerouslySetInnerHTML={{__html:yearly_horoscopes[0].Y_Remedies_Links}}/>
                  </h2>
               <p className="center"><span className="orange">Favorable Months:</span> 
               {yearly_horoscopes[0].Y_Favor_Month }
               </p>
               <p className="center"><span className="orange">Unfavorable Months:</span>
                {yearly_horoscopes[0].Y_Unfavor_Month} 
                </p>
              
               <div className="height20"></div>
            </div>
         </div>
         <div className="clear height20"></div>
      </div>
   </div>
</div>
       <a name="2025"></a>
  
       <div className="clear height20"></div>
<div className="clear"></div>
<div className="container">
   <div className="dailyhorosope_sec">
      <div className="left-panel">
        

<CategorySignUrl signvalue={signvalue} capitalizedSign={capitalizedSign}/>
         <div className="clear height20"></div>
        
         <CategoryContentUrlComponent signvalue={signvalue} capitalizedSign={capitalizedSign} yearly_horoscopes={yearly_horoscopes} monthly_horoscopes={monthly_horoscopes}Category="MonthlyHoroscope"/>
         <div className="clear"></div>
         <div className="strip-img">
            <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
         </div>
         <div className="clear"></div>
      </div>
     
   </div>
</div>
<ArticlesComponent articles={articles}/>
</div>
</>)}





    </div>
    
    </>)
}

