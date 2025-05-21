


export function getTimeInTimezoneISOFormat(timezone) {
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
    return `${year}-${month}-${day}T${hour}:${"00"}:${"00"}`;
  }

export function getTimeInTimezoneTomorrowISOFormat(timezone) {
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
    return `${year}-${month}-${day}T${hour}:${"00"}:${"00"}`;
  }



  export function getTimeInTimezoneYesterDayISOFormat(timezone) {
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
    return `${year}-${month}-${day}T${hour}:${"00"}:${"00"}`;
  }


  //latitude function and date 
  export const defaulttimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  export const encodedTimezone = btoa(defaulttimezone).replace(/=+$/, "");
  export const defaultLatitude = 13.083299636841;
  export const defaultLongitude = 80.283302307129;
  export const defaultLanguage = "en";
  export const defaultCurrency = "INR";

//current datas for date and time
  export const currentDate = new Date();
  export const currentMonth = currentDate.getMonth()+1; // JavaScript months are 0-based, so add 1
  export const fullMonth=currentMonth< 10 ? '0' + currentMonth : currentMonth;
  export const currentYear = currentDate.getFullYear();
  //time zone based on days functions 
  export const YesterDayTimeZone = getTimeInTimezoneYesterDayISOFormat(defaulttimezone);
  export const DailyAndweeklyTimeZone = getTimeInTimezoneISOFormat(defaulttimezone)
  export const TomorrowTimeZone= getTimeInTimezoneTomorrowISOFormat(defaulttimezone);