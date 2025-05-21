// FrontEndTimeZone
"use client"
import { timezoneToCountryCode,CountryInfo } from '@/Component/TimeZone/TimeZoneComponent';


//daily date and time 
export const defaultTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
export const defaultLatitude = 13.083299636841;
export const defaultLongitude = 80.283302307129;
export const defaultLanguage = "en";
export const defaultCurrency = "INR";

export const encodedTimezone = btoa(defaultTimezone).replace(/=+$/, '');


export function getLivetime(timezone) {
  const date = new Date();
 
  const options = {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Use 24-hour time format
  };

  // Format the date for the specified timezone
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
  // Split the formatted date into components
  const [month, day, year, hour, minute, second] = formattedDate.split(/[ ,:\/-]+/);
  
  
  // Construct the ISO 8601 format (YYYY-MM-DDTHH:MM:SS)
  return `${year}-${month}-${day}T${hour}:${minute}:${"00"}`;
}

export function getTomorrowLivetime(timezone) {
  const date = new Date();
 const DateValue= date.setDate(date.getDate() + 1);
  const options = {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Use 24-hour time format
  };

  // Format the date for the specified timezone
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(DateValue);
  
  // Split the formatted date into components
  const [month, day, year, hour, minute, second] = formattedDate.split(/[ ,:\/-]+/);
  
  
  // Construct the ISO 8601 format (YYYY-MM-DDTHH:MM:SS)
  return `${year}-${month}-${day}T${hour}:${minute}:${"00"}`;
}



export function getYesterDayLivetime(timezone) {
  const date = new Date();
 const DateValue= date.setDate(date.getDate() - 1);
  const options = {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Use 24-hour time format
  };

  // Format the date for the specified timezone
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(DateValue);
  
  // Split the formatted date into components
  const [month, day, year, hour, minute, second] = formattedDate.split(/[ ,:\/-]+/);
  
  
  // Construct the ISO 8601 format (YYYY-MM-DDTHH:MM:SS)
  return `${year}-${month}-${day}T${hour}:${minute}:${"00"}`;
}







export  function getUserTimeZone() {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timezoneToCountryCode[userTimeZone] || 'US'; // Default to 'US' if no mapping is found
  }
  
  export  function getCurrencyInfo (countryCode){
    return CountryInfo[countryCode] || CountryInfo['US']; // Default to 'US' if country code is not found
  };

  export  function getLatitudeInfo (latitude){
    return CountryInfo[latitude] || CountryInfo[13.0646016]; // Default to 'US' if country code is not found
  };
  export  function getLongitudeInfo (longitude){
    return CountryInfo[longitude] || CountryInfo[80.2127872]; // Default to 'US' if country code is not found
  };
  


  export const CloudFlarData ={
    
      "Cf-Timezone": "America/New_York",
      "Cf-Region-Code": "NY",
      "Cf-Region": "New York",
      "Cf-Postal-Code": "10023",
      "Cf-Metro-Code": "501",
      "Cf-Iplongitude": "-73.99530",
      "Cf-Iplatitude": "40.78200",
      "Cf-Ipcountry": "US",
      "Cf-Ipcontinent": "NA",
      "Cf-Ipcity": "New York",
      "Cdn-Loop": "cloudflare; loops=1",
      "Cf-Connecting-Ip": "74.108.30.254",
      "If-Modified-Since": "Fri, 20 Sep 2024 04:26:19 GMT",
      "User-Agent": "okhttp/4.10.0",
      "Accept": "application/json, text/plain, /",
      "Cf-Visitor": "{\"scheme\":\"https\"}",
      "X-Forwarded-Proto": "https",
      "Cf-Ray": "8c5f5650cb2f4372-EWR",
      "X-Forwarded-For": "74.108.30.254",
      "Accept-Encoding": "gzip, br",
      "Connection": "Keep-Alive",
      "Host": "api.astroved.com",
      "Content-Length": "",
      "Content-Type": "" 
  }