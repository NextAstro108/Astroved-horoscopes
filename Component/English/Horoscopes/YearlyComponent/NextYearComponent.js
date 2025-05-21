import React from "react"

export default function NextYearComponent({capitalizedSign,future_yearly_horoscopes,NextYear}){
  
    
    return(<>
    
    <div className="lightash-bg dailyhorosope_sec">
         <div className="container">
            <div className="horo-panel">
               <div className="left-panel">
                  <div className="horo-title">
                     <h1 className="center">Yearly Horoscope {NextYear}</h1>
                     <h2>Characteristics of the {capitalizedSign}:</h2>
                     <p dangerouslySetInnerHTML={{__html:future_yearly_horoscopes[0]?.Y_Characteristics}}/>
                     <div className="" id="YearlyPrediction">
                        <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}general-icon.webp`} alt="general"/>
                        <h3>General:</h3>
                        <p dangerouslySetInnerHTML={{__html:future_yearly_horoscopes[0]?.Y_General}}/>
                         <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-icon.webp`} alt="career"/>
                        <h3>Career:</h3>
                        <p dangerouslySetInnerHTML={{__html:future_yearly_horoscopes[0]?.Y_Career}}/>

                        <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}lovel-icon.webp`} alt="lovel"/>
                        <h3>Love and Relationships:</h3>
                        <p dangerouslySetInnerHTML={{__html:future_yearly_horoscopes[0]?.Y_Love_Relationship}}/>

                        <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}money-icon.webp`} alt="money"/>
                        <h3>Finances:</h3>
                        <p dangerouslySetInnerHTML={{__html:future_yearly_horoscopes[0]?.Y_Finance}}/>
                        <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}education-icon.webp`} alt="education"/>
                        <h3>Student &amp; Education:</h3>
                        <p dangerouslySetInnerHTML={{__html:future_yearly_horoscopes[0]?.Y_Student}}/>

                        <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}love-icon.webp`} alt="love"/>
                        <h3>Health:</h3>
                        <p dangerouslySetInnerHTML={{__html:future_yearly_horoscopes[0]?.Y_Health}}/>
                     </div>
                     
                     <div className="height10"></div>
                     <h2>Remedies:</h2>
                     <p dangerouslySetInnerHTML={{__html:future_yearly_horoscopes[0]?.Y_Remedies}}/>
                     <p>Please click the following links to know in detail about the remedy and to order the same.</p>
                     <h2 dangerouslySetInnerHTML={{__html:future_yearly_horoscopes[0]?.Y_Remedies_Links}}/>
                     <p className="center"><span className="orange">Favorable Months:</span>  {future_yearly_horoscopes[0]?.Y_Favor_Month} </p>
                     <p className="center"><span className="orange">Unfavorable Months:</span> {future_yearly_horoscopes[0]?.Y_Unfavor_Month}</p>
                   
                  </div>
               </div>
            </div>
         </div>
      </div>
    
    </>)
}