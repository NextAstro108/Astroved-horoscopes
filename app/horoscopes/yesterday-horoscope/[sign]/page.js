import CategoryComponent from "./categoryHoroscope";
import * as changeCase from "change-case";
import {
  YesterDayTimeZone,
  defaultCurrency,
  defaultLanguage,
  defaultLongitude,
  defaultLatitude,
  encodedTimezone,
} from "@/Component/English/Horoscopes/DateFunctions/DateFunction";

// Mark the page as dynamic
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  let data = null;

  const { sign } = await params;
  const result = changeCase.capitalCase(sign);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SINGLE_YESTERDAY_HOROSCOPE}${result}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${YesterDayTimeZone}/${defaultLanguage}/${defaultCurrency}`,
      { cache: "no-store" }
    );

    if (response.ok) {
      data = await response.json();
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }

  const title =
    data?.meta_details?.meta_title || "Astroved Yesterday Horoscopes ";
  const description =
    data?.meta_details?.meta_description ||
    "Astroved Yesterday Horoscopes Description";
  return {
    title,
    description,
  };
}

const HoroscopeCategoryPage = async ({ params }) => {
  let data = null;
  let error = null;

  const { sign } = await params;

  const result = changeCase.capitalCase(sign);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SINGLE_YESTERDAY_HOROSCOPE}${result}/${defaultLatitude}/${defaultLongitude}/${encodedTimezone}/${YesterDayTimeZone}/${defaultLanguage}/${defaultCurrency}`,
      { cache: "no-store" }
    );

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

export default HoroscopeCategoryPage;
