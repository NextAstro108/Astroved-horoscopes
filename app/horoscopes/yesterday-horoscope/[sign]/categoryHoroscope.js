

"use client"
import React,{useEffect,useState} from "react";
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; 
import { HoroscopesUrl } from "@/Component/Config/horoscopes";
import SliderComponent from "@/Component/English/Horoscopes/MajorComponent/SliderComponent";
import ArticlesComponent from "@/Component/English/Horoscopes/MajorComponent/ArticlesComponent";
import FormComponent from "@/Component/English/Horoscopes/MajorComponent/FormComponent";
import CategoryContentUrlComponent from "@/Component/English/Horoscopes/MajorComponent/CategoryContentUrlComponent";
import CategorySignUrl from "@/Component/English/Horoscopes/MajorComponent/CategorySignUrl";
import SignUrlComponent from "@/Component/English/Horoscopes/MajorComponent/SignUrlComponent";

import {defaultTimezone,defaultLanguage,encodedTimezone,getYesterDayLivetime,getUserTimeZone,getCurrencyInfo,getLatitudeInfo,getLongitudeInfo} from "@/Component/English/Horoscopes/DateFunctions/FrontEndDateFunction"


export default function CategoryComponent({ data, error,result }){
  const[yesterdayHoroscopes,setYesterdayHoroscopes]=useState([])
  const [loading, setLoading] = useState(true);

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




 
  
      const livetime = getYesterDayLivetime(defaultTimezone);

      const timezone = getUserTimeZone();
      const currency=getCurrencyInfo(timezone)
    
const currencyValue=currency.currencycode


      const Latitude=getLatitudeInfo(timezone)
const currentLatitudeValue=Latitude.latitude

const Longitude=getLongitudeInfo(timezone)
const currentLongitudeValue=Longitude.longitude



  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
try {
      setLoading(true);
      const url = `${process.env.NEXT_PUBLIC_SINGLE_YESTERDAY_HOROSCOPE}${result}/${currentLatitudeValue}/${currentLongitudeValue}/${encodedTimezone}/${livetime}/${defaultLanguage}/${currencyValue}`;
      const response = await fetch(url);
      
      if (response.ok) {
        const result = await response.json();
        const {yesterday_horoscopes } = result;
       
        setYesterdayHoroscopes(yesterday_horoscopes)
       
       
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);  // Set loading to false once data is fetched or error occurs
  }
  };

  
    const{ monthly_horoscopes, yearly_horoscopes, articles,} = data;
   
    const capitalizedSign =result
   const signvalue = result.toLowerCase();

   


const date = new Date(yesterdayHoroscopes?.EndDate);
const formattedDate = date.toLocaleString('en-US', {
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true // to display in AM/PM format
});
       
function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th'; // Handle 11th-13th
  switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
  }
}
const weekname = new Date(livetime).toLocaleDateString('en-GB', {weekday: 'long'});
const monthname = new Date(livetime).toLocaleDateString('en-GB', {month: 'long'});

const datename= new Date(livetime).getDate();
const yearname= new Date(livetime).getFullYear();
const formed=`${weekname}, ${datename}${getOrdinalSuffix(datename)} ${monthname}, ${yearname}`



return(
    <>
<div id="page-content">
    {/* main slider */}
    <SliderComponent  />
{/* <SliderComponent slider_output={slider_output}/> */}
<div id="main-horoscope">
  <div className="container">
    <div className="dailyhorosope_sec">
      <div className="left-panel">
            <h1 className="horoscope-tittle">
				<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}${signvalue}.webp`} alt="" className="left-sign-img"/> {capitalizedSign} Moon Sign Yesterday Horoscope<span className="blue-light">
                <br/> 
                ({formed})
            </span>
        </h1>
        <div className="clear"></div>
        <div className="sign_daily_panel">

          <nav className="nav-bar-main">
              <a href={`${HoroscopesUrl.CategoryBase.YesterdayHoroscope}${signvalue}`} className="active">
                  <i className="fa fa-angle-left icon" aria-hidden="true"></i>
                  Yesterday
              </a>
                <a href={`${HoroscopesUrl.CategoryBase.DailyHoroscope}${signvalue}`} className="mob-hide">
                    <i className="fa fa-clock-o icon" aria-hidden="true"></i>
                  Today</a>
              <a href={`${HoroscopesUrl.CategoryBase.TomorrowHoroscope}${signvalue}`} className="mob-hide">
                  <i className="fa fa-angle-right icon" aria-hidden="true"></i>
                  Tomorrow
              </a>
                <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}?view=full`} className="mob-hide">
                    <i className="fa fa-list-alt icon" aria-hidden="true"></i>
                  Weekly</a>
               <a href={`${HoroscopesUrl.CategoryBase.MonthlyHoroscope}${signvalue}?view=full`} className="mob-hide">
                    <i className="fa fa-calendar icon" aria-hidden="true"></i>
                  Monthly</a>
                <a href={`${HoroscopesUrl.CategoryBase.YearlyHoroscope}${signvalue}?view=full`} className="mob-hide">
                    <i className="fa fa-calendar-o icon" aria-hidden="true"></i>
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
        <div className="clear"></div>
                   
                   {loading?(
                    <div className="loading-spinner">
                   
                    <p>Loading...</p>
                </div>
                   ):(
                    <>
                     <div className="predict-change prediction">
              <p>Current Predictions Will Change After <span className="blue">
             
                {formattedDate}
                </span>                 
                
                </p>

            </div>
                       
                <div className="horo-panel prediction">
           <div className="horo-title">
              
                  <h3> <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}general-ico.png`} alt="general-ico"/>
                  {capitalizedSign} General Horoscope  <span className="yel-star-img" id="general_score" title="poor" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="3" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="poor"/>
					<input type="hidden" name="score" value="2" readOnly="readOnly"/></span></h3>

                  <p dangerouslySetInnerHTML={{ __html: yesterdayHoroscopes?.prediction_general }}/>
                            
                  <h3><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-ico.png`} alt="career"/>
                  {capitalizedSign} Career and Business Horoscope <span className="yel-star-img" id="career_score" title="regular" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="3" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="regular"/>
					<input type="hidden" name="score" value="3" readOnly="readOnly"/></span></h3>

                  <p dangerouslySetInnerHTML={{ __html: yesterdayHoroscopes.prediction_career }}/>
                            
                  <h3><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}love-ico.png`} alt="Love"/>
                  {capitalizedSign} Love and Relationships Horoscope <span className="yel-star-img" id="love_score" title="regular" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="3" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="regular"/>
					<input type="hidden" name="score" value="3" readOnly="readOnly"/></span></h3>

                  <p dangerouslySetInnerHTML={{ __html: yesterdayHoroscopes.prediction_relationship }}/>
                            
                  <h3><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}money-ico.png`} className="Money"/>
                  {capitalizedSign} Money and Finances Horoscope  <span className="yel-star-img" id="money_score" title="regular" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="3" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="regular"/>
					<input type="hidden" name="score" value="3" readOnly="readOnly"/></span></h3>

                  <p dangerouslySetInnerHTML={{ __html: yesterdayHoroscopes.prediction_money }}/>
                            
                <h3><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}health-ico.png`} alt="Health"/>
                {capitalizedSign} Health Horoscope <span className="yel-star-img" id="health_score" title="poor" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="3" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="poor"/>
					<input type="hidden" name="score" value="2" readOnly="readOnly"/></span></h3>

                <p dangerouslySetInnerHTML={{ __html: yesterdayHoroscopes.prediction_health }}/>
                            <div className="sun-sign"><p>Not Sure of Your Moon Sign? Know Predictions by Your Birth Date! <a href="/Report.aspx?type=moonsign">
							<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}click.gif`}/></a><a></a></p></div><a>
            </a></div><a>
        </a></div>
                    </>
                   )}
        
        <a>
                    <div className="clear"></div>
          <hr/>
        <div className="clear"></div>
         </a>
         
<CategorySignUrl signvalue={signvalue} capitalizedSign={capitalizedSign} />
<div className="clear"></div>
<div className="strip-img">
 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
</div>
<div className="clear"></div>

  <SignUrlComponent category="YesterdayHoroscope"/>

<div className="clear"></div>
<div className="strip-img">
 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
</div>
<div className="clear"></div>
        </div>
    
      <FormComponent formCategory="SlideForm"/>
    </div>
  </div>

<div className="clear"></div>
  <div className="container">
    <div className="dailyhorosope_sec">
      <div className="left-panel">
      
             <div className="horo-panel">

<CategoryContentUrlComponent signvalue={signvalue} capitalizedSign={capitalizedSign} yearly_horoscopes={yearly_horoscopes} monthly_horoscopes={monthly_horoscopes}Category="MonthlyHoroscope"/>




</div>
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
          <div className="horo-panel">

       <CategoryContentUrlComponent signvalue={signvalue} capitalizedSign={capitalizedSign} yearly_horoscopes={yearly_horoscopes} monthly_horoscopes={monthly_horoscopes}Category="YearlyHoroscope"/>




          </div>
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