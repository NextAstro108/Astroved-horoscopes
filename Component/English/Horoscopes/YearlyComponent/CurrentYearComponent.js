


"use client"

import React from "react";
export default function CurrentYearComponent({capitalizedSign,yearly_horoscopes,handleOpen,currentYear}){

    // const currentYear = date.getFullYear()
    return(<>
    
    <div className="left-panel">
            <div className="horo-panel">
               <div className="horo-title">
                  <h2 className="horoscope-tittle center color-orange">Yearly Horoscope {currentYear}</h2>
                  <h2>Characteristics of the {capitalizedSign}:</h2>
                 <p>{yearly_horoscopes[0].Y_Characteristics}</p> 
                  <div className="append append-prediction">	<div className="" id="YearlyPrediction">
		<h2>{currentYear} Horoscope for {capitalizedSign} Moon sign </h2>
				<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}general-ico.png`} alt="general"/>
	   <h3>General:</h3>
	   <p dangerouslySetInnerHTML={{__html:yearly_horoscopes[0].Y_General}}/>
 
	   <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}love-ico.png`} alt="love"/>
	   <h3>Love:</h3>
	   <p dangerouslySetInnerHTML={{__html:yearly_horoscopes[0].Y_Love_Relationship}}/>
   
     <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}money-ico.png`} alt="money"/>
	   <h3>Finances:</h3>
       <p dangerouslySetInnerHTML={{__html:yearly_horoscopes[0].Y_Finance}}/>
  
	   <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-ico.png`} alt="career"/>
	   <h3>Career:</h3>
       <p dangerouslySetInnerHTML={{__html:yearly_horoscopes[0].Y_Career}}/>
       <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}health-ico.png`} alt="health"/>
	   <h3>Health:</h3>
       <p dangerouslySetInnerHTML={{__html:yearly_horoscopes[0].Y_Health}}/>

	   <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-ico.png`} alt="career"/>
	   <h3>Student &amp; Education:</h3>
       <p dangerouslySetInnerHTML={{__html:yearly_horoscopes[0].Y_Student}}/>

	   <div className="height20"></div>
	   <div className="center">
	      <div className="btn-hover1">
            {/* <a href="javascript:void(0)" onClick={handleOpen}>Close</a> */}
            <a href="#"  onClick={(e) => {e.preventDefault(); handleOpen();}}>Close</a>
           
            </div>
	   </div>
	</div>
</div>
                  <div className="height30"></div>
                  <h2>Remedies:</h2>
              
                     <p dangerouslySetInnerHTML={{__html:yearly_horoscopes[0].Y_Remedies}}/>
                  <p>Please click the following links to know in detail about the remedy and to order the same.</p>
                  <h2>
                    <p dangerouslySetInnerHTML={{__html:yearly_horoscopes[0].Y_Remedies_Links}}/> </h2>
                  <p className="center"><span className="orange">Favorable Months:</span> {yearly_horoscopes[0].Y_Favor_Month}</p>
                  <p className="center"><span className="orange">Unfavorable Months:</span> {yearly_horoscopes[0].Y_Unfavor_Month} </p>
                 
                  <div className="height20"></div>
               </div>
            </div>
          
            <div className="clear height20"></div>
         </div>
    
    </>)
}