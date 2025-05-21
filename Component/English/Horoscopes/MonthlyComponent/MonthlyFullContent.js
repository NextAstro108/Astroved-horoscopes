
import React from "react";

export default function MonthlyFullContent({currentMonth,monthly_horoscopes,handleOpen,nextMonth,currentYear}){
 
  const monthSmall=nextMonth.toLowerCase()
  
 
    return(<>
    <div class="dailyhorosope_sec">
         <div class="left-panel">
             <div class="horo-panel">
               <div class="horo-title">
               <h1 class="center">{currentMonth} Horoscope for Aries Moon sign</h1>

				
                  <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}general-ico.png`} alt="general"/>
                  <h3>General:</h3>
                  <p dangerouslySetInnerHTML={{__html:monthly_horoscopes[0].M_General}}/>
                  <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}love-ico.png`} alt="love"/>
                  <h3>Love Relationships:</h3>
                  <p dangerouslySetInnerHTML={{__html:monthly_horoscopes[0].M_Love_Relationship}}/>
                  <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}money-ico.png`} alt="money"/>
                  <h3> Finances:</h3>
                  <p dangerouslySetInnerHTML={{__html:monthly_horoscopes[0].M_Money}}/>
                  <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-ico.png`} alt="career"/>
                  <h3>Career:</h3>
                  <p dangerouslySetInnerHTML={{__html:monthly_horoscopes[0].M_Career}}/>
                  <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}business-ico.png`} alt="business"/>
                  <h3> Business:</h3>
                  <p dangerouslySetInnerHTML={{__html:monthly_horoscopes[0].M_Business}}/>
                  <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}health-ico.png`} alt="health"/>
                  <h3>Health:</h3>
                  <p dangerouslySetInnerHTML={{__html:monthly_horoscopes[0].M_Health}}/>
                  <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-ico.png`} alt="career"/>
                  <h3>Student:</h3>
                  <p dangerouslySetInnerHTML={{__html:monthly_horoscopes[0].M_Student}}/>
				  <div class="center">
          <a href="#"  onClick={(e) => { e.preventDefault();  handleOpen();}} class="bck-btn">Close</a>
					<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/horoscope/monthly/aries-${monthSmall}-monthly-horoscope-${currentYear}`} class="bck-btn">Next Month</a>
				   </div>
				  <p><span class="orange">Auspicious dates:</span>&nbsp;&nbsp;{monthly_horoscopes[0].M_Auspicious_dates}</p>
                  <p><span class="orange">Inauspicious dates:</span>&nbsp;&nbsp;{monthly_horoscopes[0].M_Inauspicious_dates}</p>
               </div>
            </div>
          </div>
  		</div>
    
    
    </>)
}