import CategoryComponent from "./categoryHoroscope";
import {
  DailyAndweeklyTimeZone,
  defaultCurrency,
  defaultLanguage,
  defaultLongitude,
  defaultLatitude,
  encodedTimezone,
} from "@/Component/English/Horoscopes/DateFunctions/DateFunction";
import * as changeCase from "change-case";
import { headers } from 'next/headers'

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  let data = null;
  const { sign } = await params;
  const result = changeCase.capitalCase(sign);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SINGLE_DAILY_HOROSCOPE}${result}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${DailyAndweeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`,
      {
        cache: "no-store",
      }
    );

    if (response.ok) {
      data = await response.json();
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }
  const title = data?.meta_details?.title || "Astroved Single Daily Horoscopes";
  const description =
    data?.meta_details?.description || "Astroved Single Daily Horoscopes";

  return {
    title,
    description,
  };
}

const HoroscopeDailyPage = async ({ params }) => {
  let data = null;
  let error = null;
  const headersList = await headers()
  const userAgent = headersList.get('user-agent')

  console.log(userAgent)
  const { sign } = await params;
  const result = changeCase.capitalCase(sign);


  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SINGLE_DAILY_HOROSCOPE}${result}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${DailyAndweeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`,
      { cache: "force-cache" } // Disable caching to always fetch fresh data
    );
console.log(`${process.env.NEXT_PUBLIC_SINGLE_DAILY_HOROSCOPE}${result}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${DailyAndweeklyTimeZone}/${defaultLanguage}/${defaultCurrency}`)
    // Handle the response
    if (response.ok) {
      data = await response.json();
  
    } else {
      const errorData = await response.json();
      error = errorData.status;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }

  return <CategoryComponent data={data} error={error} result={result} />;
};

export default HoroscopeDailyPage;
