







// "use client"

import { HoroscopesUrl } from "@/Component/Config/horoscopes";
function formatCategoryName(category) {
    return category.replace(/([a-z])([A-Z])/g, '$1 $2'); // Adds a space between camelCase words
}


export default function CategoryContentUrlComponent({signvalue,capitalizedSign,yearly_horoscopes,Category,monthly_horoscopes}){
  
    const baseUrl = HoroscopesUrl.CategoryBase[Category];
    const formattedCategory = formatCategoryName(Category);
    

    const date = new Date();
    const currentMonth = date.toLocaleString('default', { month: 'long' }); 
    const currentYear = date.getFullYear();
    
    return(<>
    
    <div className="horo-panel">
	            


                   {Category==="YearlyHoroscope" && 
    
        <div className="horo-title">
        <h2 className="horo-panel-monthly">
<a href={`${baseUrl}${signvalue}?view=full`}> {capitalizedSign} Moon Sign {formattedCategory}:<span className="monthly-date"> ({currentYear})</span></a>                          
</h2>
<hr/>
<div className="clear height10"></div>
             <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}general-ico.png`} alt="general"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.yearlySlug.general}`}>
<h3> {capitalizedSign} General :</h3>

<p dangerouslySetInnerHTML={{__html: yearly_horoscopes[0]?.Y_General.length > 150 
              ? `${yearly_horoscopes[0]?.Y_General.substring(0, 150)}...` : yearly_horoscopes[0]?.Y_General}} />
</a>

             <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}love-ico.png`} alt="love"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.yearlySlug.lovemarriage}`}>
<h3> {capitalizedSign} Love and Relationships Horoscope:</h3>

<p dangerouslySetInnerHTML={{__html: yearly_horoscopes[0]?.Y_Love_Relationship.length > 150 
              ? `${yearly_horoscopes[0]?.Y_Love_Relationship.substring(0, 150)}...` : yearly_horoscopes[0]?.Y_Love_Relationship}} />
</a>

             <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}money-ico.png`} alt="money"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.yearlySlug.money}`}>
<h3> {capitalizedSign} Money and Finances Horoscope:</h3>


<p dangerouslySetInnerHTML={{__html: yearly_horoscopes[0]?.Y_Finance.length > 150 
              ? `${yearly_horoscopes[0]?.Y_Finance.substring(0, 150)}...` : yearly_horoscopes[0]?.Y_Finance}} />
</a>


             <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}business-ico.png`} alt="business"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.yearlySlug.career}`}>
<h3> {capitalizedSign} Career and Business Horoscope:</h3>

<p dangerouslySetInnerHTML={{__html: yearly_horoscopes[0]?.Y_Career.length > 150 
              ? `${yearly_horoscopes[0]?.Y_Career.substring(0, 150)}...` : yearly_horoscopes[0]?.Y_Career}} />
</a>

<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}health-ico.png`} alt="health"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.yearlySlug.health}`}>
<h3> {capitalizedSign} Health Horoscope:</h3>
<p dangerouslySetInnerHTML={{__html: yearly_horoscopes[0]?.Y_Health.length > 150 
              ? `${yearly_horoscopes[0]?.Y_Health.substring(0, 150)}...` : yearly_horoscopes[0]?.Y_Health}} /> </a>   

             <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-ico.png`} alt="career"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.yearlySlug.student}`}>
<h3> {capitalizedSign} Education and Student: </h3>

<p dangerouslySetInnerHTML={{__html: yearly_horoscopes[0]?.Y_Student.length > 150 
              ? `${yearly_horoscopes[0]?.Y_Student.substring(0, 150)}...` : yearly_horoscopes[0]?.Y_Student}} />
</a>

             
         <div className="right">
           <a className="more-btn" href={`${baseUrl}${signvalue}-general-overview?view=full`}>View All</a>
</div>
</div>
                }
    {Category==="MonthlyHoroscope" && 
   

<div className="horo-panel">
<h2 className="horo-panel-monthly">
<a href={`${baseUrl}${signvalue}?view=full`}> {capitalizedSign} Moon Sign {formattedCategory}:<span className="monthly-date"> ({currentMonth} {currentYear})</span></a>                          
</h2>
<hr/>
<div className="clear height10"></div>

<div class="horo-content">

     <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}general-ico.png`} alt="general"/>

<a href={`${baseUrl}${signvalue}${HoroscopesUrl.monthlySlugs.general}`}>
<h3> {capitalizedSign} General :</h3>

<p dangerouslySetInnerHTML={{__html: monthly_horoscopes[0]?.M_General.length > 150 
      ? `${monthly_horoscopes[0]?.M_General.substring(0, 150)}...` : monthly_horoscopes[0]?.M_General}} />
</a>

     <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}love-ico.png`} alt="love"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.monthlySlugs.lovemarriage}`}>
<h3> {capitalizedSign} Love and Relationships:</h3>

<p dangerouslySetInnerHTML={{__html: monthly_horoscopes[0]?.M_Love_Relationship.length > 150 
      ? `${monthly_horoscopes[0]?.M_Love_Relationship.substring(0, 150)}...` : monthly_horoscopes[0]?.M_Love_Relationship}} />
</a>

     <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}money-ico.png`} alt="money"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.monthlySlugs.money}`}>
<h3> {capitalizedSign} Money and Finances:</h3>


<p dangerouslySetInnerHTML={{__html: monthly_horoscopes[0]?.M_Money.length > 150 
      ? `${monthly_horoscopes[0]?.M_Money.substring(0, 150)}...` : monthly_horoscopes[0]?.M_Money}} />
</a>


     <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-ico.png`} alt="career"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.monthlySlugs.career}`}>
<h3> {capitalizedSign} Career:</h3>

<p dangerouslySetInnerHTML={{__html: monthly_horoscopes[0]?.M_Career.length > 150 
      ? `${monthly_horoscopes[0]?.M_Career.substring(0, 150)}...` : monthly_horoscopes[0]?.M_Career}} />
</a>

<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}business-ico.png`} alt="business"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.monthlySlugs.business}`}>
<h3> {capitalizedSign} Business:</h3>

<p dangerouslySetInnerHTML={{__html: monthly_horoscopes[0]?.M_Business.length > 150 
      ? `${monthly_horoscopes[0]?.M_Business.substring(0, 150)}...` : monthly_horoscopes[0]?.M_Business}} />
</a>
     
     <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}health-ico.png`} alt="health"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.monthlySlugs.health}`}>
<h3> {capitalizedSign} Health Horoscope:</h3>
<p dangerouslySetInnerHTML={{__html: monthly_horoscopes[0]?.M_Health.length > 150 
      ? `${monthly_horoscopes[0]?.M_Health.substring(0, 150)}...` : monthly_horoscopes[0]?.M_Health}} /> </a>

    

     <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}career-ico.png`} alt="career"/>
<a href={`${baseUrl}${signvalue}${HoroscopesUrl.monthlySlugs.student}`}>
<h3> {capitalizedSign} Student and Education: </h3>

<p dangerouslySetInnerHTML={{__html: monthly_horoscopes[0]?.M_Student.length > 150 
      ? `${monthly_horoscopes[0]?.M_Student.substring(0, 150)}...` : monthly_horoscopes[0]?.M_Student}} />


</a>

    
 <div className="right">
   <a className="more-btn" href={`${baseUrl}${signvalue}${HoroscopesUrl.monthlySlugs.general}?view=full`}>View All</a>

</div>
</div>
</div>
                 } 
	          </div>
    
    </>
    )
}