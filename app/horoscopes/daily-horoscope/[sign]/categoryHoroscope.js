




"use client"
import React,{useState,useEffect} from "react";
import { HoroscopesUrl } from "@/Component/Config/horoscopes";
import SliderComponent from "@/Component/English/Horoscopes/MajorComponent/SliderComponent";
import FormComponent from "@/Component/English/Horoscopes/MajorComponent/FormComponent";
// import ArticlesComponent from "@/Component/English/Horoscopes/MajorComponent/ArticlesComponent";
import SignUrlComponent from "@/Component/English/Horoscopes/MajorComponent/SignUrlComponent";
import CategoryContentUrlComponent from "@/Component/English/Horoscopes/MajorComponent/CategoryContentUrlComponent";
import CategorySignUrl from "@/Component/English/Horoscopes/MajorComponent/CategorySignUrl";
import {defaultTimezone,defaultCurrency,defaultLanguage,defaultLatitude,defaultLongitude,encodedTimezone,getLivetime,getUserTimeZone,getCurrencyInfo,getLatitudeInfo,getLongitudeInfo,CloudFlarData} from "@/Component/English/Horoscopes/DateFunctions/FrontEndDateFunction"

export default function CategoryComponent({ data, error,result}){


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

const{monthly_horoscopes, yearly_horoscopes, articles} = data;


  const [open, setOpen] = useState(true); // 'open' state for toggling between next and previous predictions

  const [dailyHoroscopePrev,setDailyHoroscopePrev]=useState()
  const[dailyHoroscopeNext,setDailyoroscopeNext]=useState()
  const [loading, setLoading] = useState(true);  // Add loading state

  const handleOpen=()=>{
    setOpen(false)
  }
  const handleClose=()=>{
    setOpen(true)
  }
 



  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th'; // Handle 11th-13th
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

const livetime = getLivetime(defaultTimezone);
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
   
      // setLoading(true);
      // process.env.NEXT_PUBLIC_SINGLE_DAILY_HOROSCOPE
       const url = `${process.env.NEXT_PUBLIC_SINGLE_DAILY_HOROSCOPE}${result}/${currentLatitudeValue}/${currentLongitudeValue}/${encodedTimezone}/${livetime}/${defaultLanguage}/${currencyValue}`;
      const response = await fetch(url);
    
      
      if (response.ok) {
        const result = await response.json();
       
        setDailyHoroscopePrev(result.daily_horoscope_prev)
        setDailyoroscopeNext (result.daily_horoscope_next)
      
       
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);  // Set loading to false once data is fetched or error occurs
  }
  };



   
    const capitalizedSign =result
   const signvalue = result.toLowerCase();
  



const weekname = new Date(livetime).toLocaleDateString('en-GB', {weekday: 'long'});
const monthname = new Date(livetime).toLocaleDateString('en-GB', {month: 'long'});
const datename= new Date(livetime).getDate();
const yearname= new Date(livetime).getFullYear();
const formed=`${weekname}, ${datename}${getOrdinalSuffix(datename)} ${monthname}, ${yearname}`


const date = new Date(dailyHoroscopePrev?.EndDate);

const options = { month: 'long', day: 'numeric' };
const formattedPrevious = date.toLocaleDateString('en-US', options);

const timePrevious = { hour: '2-digit', minute: '2-digit', hour12: true };
const formattedPreviousTime = date.toLocaleTimeString('en-US', timePrevious);

const date2 = new Date(dailyHoroscopeNext?.EndDate);
const options2 = { month: 'long', day: 'numeric' };

const formattedNext = date2.toLocaleDateString('en-US', options2);
const timeNext = { hour: '2-digit', minute: '2-digit', hour12: true };

// Fix the issue by using date2 for formattedNextTime
const formattedNextTime = date2.toLocaleTimeString('en-US', timeNext);

  

return(
    <>
    
<div id="page-content">
<SliderComponent  />
<div id="main-horoscope">
  <div className="container">
    <div className="dailyhorosope_sec">
      <div className="left-panel">
            <h1 className="horoscope-tittle">
               <img src={`../..${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}${signvalue}.webp`} alt="" className="left-sign-img"/> {capitalizedSign} Moon Sign Daily/Today Horoscope
         <span className="blue-light">
         
                <br/>({formed})
            </span>
        </h1>
        <div className="clear"></div>
        <div className="sign_daily_panel">

          <nav className="nav-bar-main">
             
              <a href={`${HoroscopesUrl.CategoryBase.YesterdayHoroscope}${signvalue}`}className="mob-hide">
                  {/* <i className="fa fa-angle-left icon" aria-hidden="true"></i> */}
                  <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}yesterday.png`} alt="yesterday1" width="16px" height="16px" />
                  Yesterday
              </a>
                <a href={`${HoroscopesUrl.CategoryBase.DailyHoroscope}${signvalue}`} className="active">
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}today.png`} alt="today2" width="16px" height="16px" />
                  Today</a>
              <a href={`${HoroscopesUrl.CategoryBase.TomorrowHoroscope}${signvalue}`} className=" mob-hide">
              <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}tomorrow.png`} alt="tomorrow3" width="16px" height="16px" />
                  Tomorrow
              </a>
                <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}?view=full`}>
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}weekly.png`} alt="weekly4" width="16px" height="16px" />
                  Weekly</a>
               <a href={`${HoroscopesUrl.CategoryBase.MonthlyHoroscope}${signvalue}?view=full`}>
               <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}monthly.png`} alt="monthly5" width="16px" height="16px" />
                  Monthly</a>
                <a href={`${HoroscopesUrl.CategoryBase.YearlyHoroscope}${signvalue}?view=full`}>
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}yearly.png`} alt="yearly6" width="16px" height="16px" />
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


        {loading ? (
                // <div className="loading-spinner">
                   
                //     <p>Loading...</p>
                // </div>
                ""
            ) : (

              <>
              
              {open?(<>
				 <div className="predict-change prediction">
         <p>Current Predictions Will Change After 
          <span className="blue">{formattedPrevious},{formattedPreviousTime}</span>                     
        
         {dailyHoroscopeNext && (
            <a href="javascript:void(0)" className="next-pred" onClick={handleOpen}>
              Next&nbsp;<i className="fa fa-angle-right"></i>
            </a>
          )}
           </p>

       </div>
				
				<div className="horo-panel prediction">
           <div className="horo-title">
              
                  <h3> <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}general-ico.png`} alt="general-ico"/>
                  {dailyHoroscopePrev?.sign} General Horoscope  <span className="yel-star-img" id="general_score" title="poor" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="3" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="poor"/>
					<input type="hidden" name="score" value="2" readOnly="readOnly"/></span></h3>

                  <p dangerouslySetInnerHTML={{ __html: dailyHoroscopePrev?.prediction_general }}/>
                            
                  <h3><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-ico.png`} alt="career"/>
                  {dailyHoroscopePrev?.sign} Career and Business Horoscope <span className="yel-star-img" id="career_score" title="regular" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="3" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="regular"/>
					<input type="hidden" name="score" value="3" readOnly="readOnly"/></span></h3>

                  <p dangerouslySetInnerHTML={{ __html: dailyHoroscopePrev?.prediction_career }}/>
                            
                  <h3><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}love-ico.png`} alt="Love"/>
                  {dailyHoroscopePrev?.sign} Love and Relationships Horoscope <span className="yel-star-img" id="love_score" title="regular" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="3" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="regular"/>
					<input type="hidden" name="score" value="3" readOnly="readOnly"/></span></h3>

                  <p dangerouslySetInnerHTML={{ __html: dailyHoroscopePrev?.prediction_relationship }}/>
                            
                  <h3><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}money-ico.png`} alt="Money"/>
                  {dailyHoroscopePrev?.sign} Money and Finances Horoscope  <span className="yel-star-img" id="money_score" title="regular" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="3" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="regular"/>
					<input type="hidden" name="score" value="3" readOnly="readOnly"/></span></h3>

                  <p dangerouslySetInnerHTML={{ __html: dailyHoroscopePrev?.prediction_money }}/>
                            
                <h3><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}health-ico.png`} alt="Health"/>
                {dailyHoroscopePrev?.sign} Health Horoscope <span className="yel-star-img" id="health_score" title="poor" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="3" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="poor"/>
					<input type="hidden" name="score" value="2" readOnly="readOnly"/></span></h3>

                <p dangerouslySetInnerHTML={{ __html: dailyHoroscopePrev?.prediction_health }}/>
                            <div className="sun-sign"><p>Not Sure of Your Moon Sign? Know Predictions by Your Birth Date! <a href="/Report.aspx?type=moonsign">
							<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}click.gif`} alt="click"/></a><a></a></p></div><a>
            </a></div><a>
        </a></div>
        <a>
                    <div class="clear"></div>
          <hr/>
        <div class="clear"></div>
         </a>
        </>
		
		
		
		
		
		):(<>
    
      <div className="next-prediction" >
      <div className="predict-change">
        <p>Current Predictions Will Change next 
          <span className="blue">{formattedNext},{formattedNextTime}</span>
      <a href="javascript:void(0)" className="next-close" onClick={handleClose}><i className="fa fa-angle-left"></i>&nbsp;Prev </a></p>
      </div>
</div>
    
    <a>
        
        <div className="next-prediction" >
          <div className="horo-panel">
            <div className="horo-title">
              
                <h3><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}general-ico.png`} className="General"/>
                {dailyHoroscopeNext?.sign} General Horoscope <span className="yel-star-img" id="general_score_next" title="regular" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="3" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="regular"/>
					<input type="hidden" name="score" value="3" readOnly="readOnly"/></span></h3>
          <p dangerouslySetInnerHTML={{ __html: dailyHoroscopeNext?.prediction_general }}/>
                                            <h3> <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-ico.png`} alt="Career"/>
                                            {dailyHoroscopeNext?.sign} Career and Business Horoscope <span className="yel-star-img" id="career_score_next" title="regular" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="3" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="regular"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="regular"/>
					<input type="hidden" name="score" value="3" readOnly="readOnly"/></span></h3>
          <p dangerouslySetInnerHTML={{ __html: dailyHoroscopeNext?.prediction_career }}/>
                            
                <h3><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}love-ico.png`} alt="Love"/>
                {dailyHoroscopeNext?.sign} Love and Relationships Horoscope <span className="yel-star-img" id="love_score_next" title="poor" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="3" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="poor"/>
					<input type="hidden" name="score" value="2" readOnly="readOnly"/></span></h3>
          <p dangerouslySetInnerHTML={{ __html: dailyHoroscopeNext?.prediction_relationship }}/>
                            
                <h3> <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}money-ico.png`} alt="Money"/>
                {dailyHoroscopeNext?.sign} Money and Finances Horoscope <span className="yel-star-img" id="money_score_next" title="poor" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="3" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="poor"/>
					<input type="hidden" name="score" value="2" readOnly="readOnly"/></span></h3>
          <p dangerouslySetInnerHTML={{ __html: dailyHoroscopeNext?.prediction_money }}/>
                            
          <h3><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}health-ico.png`} alt="Health"/>
          {dailyHoroscopeNext?.sign} Health Horoscope <span className="yel-star-img" id="health_score" title="poor" style={{width: "100px"}}>
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="1" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-on.png`} alt="2" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="3" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="4" title="poor"/>&nbsp;
					<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}star-off.png`} alt="5" title="poor"/>
					<input type="hidden" name="score" value="2" readOnly="readOnly"/></span></h3>

                <p dangerouslySetInnerHTML={{ __html: dailyHoroscopeNext?.prediction_health }}/>
                          </div>
          </div>
        
        </div>
       
                    <div className="clear"></div>
          <hr/>
        <div className="clear"></div>
          </a>
          </>
          )}  
              
              </>)}
  
<CategorySignUrl signvalue={signvalue} capitalizedSign={capitalizedSign} />
<div className="clear"></div>
<div className="strip-img">
 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
</div>
<div className="clear"></div>

  <SignUrlComponent category="DailyHoroscope" />

<div className="clear"></div>
<div className="strip-img">
 <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horo-strip.png`} alt="horoscope"/>
</div>
<div className="clear"></div>
        </div>
     
      <FormComponent formCategory="SlideForm" />
    </div>
  </div>

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
  


{/* <ArticlesComponent articles={articles}/> */}
</div>


  </div>
 
</>
)
}



















