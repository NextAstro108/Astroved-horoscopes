


"use client"

import { HoroscopesUrl } from "@/Component/Config/horoscopes";
export default function CategorySignUrl({signvalue,capitalizedSign}){
  const date = new Date();
 // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
 const dayOfWeek = date.getDay();

  // Calculate the start of the week (e.g., Sunday or Monday)
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - dayOfWeek); // Set to the most recent Sunday (if Sunday as start of week)

  // Calculate the end of the week (Saturday)
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // Add 6 days to get the end of the week (Saturday)

  // Helper function to format the date in the desired format (e.g., "Dec 01")
  const formatDate = (d) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[d.getMonth()]; // Get month name
    const day = d.getDate().toString().padStart(2, '0'); // Get day with leading zero
    return `${month} ${day}`;
  };

  const startDate = formatDate(startOfWeek);
  const endDate = formatDate(endOfWeek);
    return(<>
    
    <div className="horo-panel-weekly">
  <h2>
  <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}?view=full`}> {capitalizedSign} Moon Sign Weekly Horoscope<span> ({startDate} - {endDate})</span> </a>
  </h2>

  <div className="lifestyle-box">
    <div className="round-wrap">
    <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}${HoroscopesUrl.weeklySlugs.general}`}>
    <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life1.webp`} alt="life1"/></a></div>
    <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}${HoroscopesUrl.weeklySlugs.general}`}>
    <p>{capitalizedSign} General</p></a>
  </div>

  <div className="lifestyle-box">
    <div className="round-wrap1">
    <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}${HoroscopesUrl.weeklySlugs.money}`}>
    <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life4.webp`} alt="life4"/></a></div>
    <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}${HoroscopesUrl.weeklySlugs.money}`}>
    <p>{capitalizedSign} Money</p></a>
  </div>

  <div className="lifestyle-box">
    <div className="round-wrap2">
    <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}${HoroscopesUrl.weeklySlugs.health}`}>
    <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life3.webp`} alt="life3"/></a></div>
    <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}${HoroscopesUrl.weeklySlugs.health}`}>
    <p> {capitalizedSign} Health</p></a>
  </div>

  <div className="lifestyle-box">
    <div className="round-wrap3">
    <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}${HoroscopesUrl.weeklySlugs.career}`}>
    <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life2.webp`} alt="life2"/></a></div>
    <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}${HoroscopesUrl.weeklySlugs.career}`}>
    <p>{capitalizedSign} Career</p></a>
  </div>
  
  <div className="lifestyle-box">
    <div className="round-wrap4">
    <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}${HoroscopesUrl.weeklySlugs.lovemarriage}`}>
    <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life5.webp`} alt="life5"/></a></div>
    <a href={`${HoroscopesUrl.CategoryBase.WeeklyHoroscope}${signvalue}${HoroscopesUrl.weeklySlugs.lovemarriage}`}>
    <p> {capitalizedSign} Love</p></a>
  </div>        
  <div className="clear"></div>
</div>
    
    </>
    )
}