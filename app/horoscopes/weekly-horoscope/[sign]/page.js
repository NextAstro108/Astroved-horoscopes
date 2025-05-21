// import CategoryComponent from "./categoryHoroscope";
// import * as changeCase from "change-case";

// import {
//   DailyAndweeklyTimeZone,
//   defaultCurrency,
//   defaultLanguage,
//   defaultLatitude,
//   defaultLongitude,
//   encodedTimezone,
// } from "@/Component/English/Horoscopes/DateFunctions/DateFunction";
// // Mark the page as dynamic
// export const dynamic = "force-dynamic";

// export async function generateMetadata({ params }) {
//   let data = null;
//   const { sign } = await params;
//   try {
//     const capitalizedSign = changeCase.capitalCase(sign);
//     let url = `${process.env.NEXT_PUBLIC_SINGLE_WEEKLY_HOROSCOPE}${capitalizedSign}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${DailyAndweeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`;

//     console.log(url)
//     console.log("*****")
//     const response = await fetch(url, { cache: "no-store" });

//     if (response.ok) {
//       data = await response.json();
//     } else {
//       const errorData = await response.json();
//       console.log(errorData);

//       url = `${process.env.NEXT_PUBLIC_SINGLE_WEEKLY_CATEGORY_HOROSCOPE}${sign}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${DailyAndweeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`;
//       console.log(url)
//       console.log("*****")
//       const fallbackResponse = await fetch(url, { cache: "no-store" });
//       if (fallbackResponse.ok) {
//         data = await fallbackResponse.json();
//       } else {
//         const fallbackErrorData = await fallbackResponse.json();
//         console.log(fallbackErrorData);
//       }
//     }
//   } catch (err) {
//     console.error("Error fetching data:", err);
//   }

//   const title = data?.meta_details?.meta_title || "Astroved Weekly Horoscopes ";
//   const description =
//     data?.meta_details?.meta_description ||
//     "Astroved Weekly Horoscopes Description";

//   return {
//     title,
//     description,
//   };
// }
// const HoroscopeWeeklyPage = async ({ params }) => {
//   let data = null;
//   let error = null;
//   const { sign } = await params;

//   try {
//     const capitalizedSign = changeCase.capitalCase(sign);

  

//     let url = `${process.env.NEXT_PUBLIC_SINGLE_WEEKLY_HOROSCOPE}${capitalizedSign}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${DailyAndweeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`;

//     const response = await fetch(url, { cache: "no-store" });

//     if (response.ok) {
//       data = await response.json();
//     } else {
//       const errorData = await response.json();
//       error = errorData.status;
//       console.log(
//         `${process.env.NEXT_PUBLIC_SINGLE_WEEKLY_CATEGORY_HOROSCOPE}${sign}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${weeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`
//       );
//       url = `${process.env.NEXT_PUBLIC_SINGLE_WEEKLY_CATEGORY_HOROSCOPE}${sign}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${weeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`;
//       const fallbackResponse = await fetch(url, { cache: "no-store" });
//       if (fallbackResponse.ok) {
//         data = await fallbackResponse.json();
//       } else {
//         const fallbackErrorData = await fallbackResponse.json();
//         error = fallbackErrorData.status;
//       }
//     }
//   } catch (err) {
//     console.error("Error fetching data:", err);
//   }

//   return <CategoryComponent data={data} error={error} />;
// };

// export default HoroscopeWeeklyPage;







import CategoryComponent from "./categoryHoroscope";
import * as changeCase from "change-case";

import {
  DailyAndweeklyTimeZone,
  defaultCurrency,
  defaultLanguage,
  defaultLatitude,
  defaultLongitude,
  encodedTimezone,
} from "@/Component/English/Horoscopes/DateFunctions/DateFunction";
// Mark the page as dynamic
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  let data = null;
 
  const { sign } = await params;

  try {
    const capitalizedSign = changeCase.capitalCase(sign);

    // First try the primary URL
    const primaryUrl = `${process.env.NEXT_PUBLIC_SINGLE_WEEKLY_HOROSCOPE}${capitalizedSign}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${DailyAndweeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`;
    const primaryResponse = await fetch(primaryUrl, { cache: "no-store" });

    if (primaryResponse.ok) {
      data = await primaryResponse.json();
      // If data is empty from primary URL, try the fallback
      if (!data || Object.keys(data).length === 0) {
        throw new Error("Primary URL returned empty data");
      }
    } else {
      throw new Error(`Primary request failed with status: ${primaryResponse.status}`);
    }
  }catch (primaryError) {
    console.log("Primary request failed, trying fallback URL:", primaryError);
    
    try {
      // If primary fails, try the fallback URL
      const fallbackUrl = `${process.env.NEXT_PUBLIC_SINGLE_WEEKLY_CATEGORY_HOROSCOPE}${sign}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${DailyAndweeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`;
      const fallbackResponse = await fetch(fallbackUrl, { cache: "no-store" });

      if (fallbackResponse.ok) {
        data = await fallbackResponse.json();
        // If fallback also returns empty data, set error
        if (!data || Object.keys(data).length === 0) {
          error = "No data available from either source";
        }
      } else {
        const errorData = await fallbackResponse.json();
        error = errorData.status || "Failed to fetch data from both sources";
      }
    } catch (fallbackError) {
      console.error("Error fetching fallback data:", fallbackError);
      error = "Failed to fetch data from both sources";
    }
  }

  const title = data?.meta_details?.meta_title || "Astroved Weekly Horoscopes ";
  const description =
    data?.meta_details?.meta_description ||
    "Astroved Weekly Horoscopes Description";

  return {
    title,
    description,
  };
}
const HoroscopeWeeklyPage = async ({ params }) => {
  let data = null;
  let error = null;
  const { sign } = await params;

  try {
    const capitalizedSign = changeCase.capitalCase(sign);

    // First try the primary URL
    const primaryUrl = `${process.env.NEXT_PUBLIC_SINGLE_WEEKLY_HOROSCOPE}${capitalizedSign}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${DailyAndweeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`;
    
    console.log("Trying primary URL:", primaryUrl);
    const primaryResponse = await fetch(primaryUrl, { cache: "no-store" });

    if (primaryResponse.ok) {
      data = await primaryResponse.json();
      // If data is empty from primary URL, try the fallback
      if (!data || Object.keys(data).length === 0) {
        throw new Error("Primary URL returned empty data");
      }
    } else {
      throw new Error(`Primary request failed with status: ${primaryResponse.status}`);
    }
  }catch (primaryError) {
    console.log("Primary request failed, trying fallback URL:", primaryError);
    
    try {
      // If primary fails, try the fallback URL
      const fallbackUrl = `${process.env.NEXT_PUBLIC_SINGLE_WEEKLY_CATEGORY_HOROSCOPE}${sign}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${DailyAndweeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`;
      
      console.log("Trying fallback URL:", fallbackUrl);
      const fallbackResponse = await fetch(fallbackUrl, { cache: "no-store" });

      if (fallbackResponse.ok) {
        data = await fallbackResponse.json();
        // If fallback also returns empty data, set error
        if (!data || Object.keys(data).length === 0) {
          error = "No data available from either source";
        }
      } else {
        const errorData = await fallbackResponse.json();
        error = errorData.status || "Failed to fetch data from both sources";
      }
    } catch (fallbackError) {
      console.error("Error fetching fallback data:", fallbackError);
      error = "Failed to fetch data from both sources";
    }
  }

  return <CategoryComponent data={data} error={error} />;
};

export default HoroscopeWeeklyPage;
