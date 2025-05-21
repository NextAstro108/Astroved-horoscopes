import CategoryComponent from "./categoryHoroscope";

// Mark the page as dynamic
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  let data = null;

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_MONTHLY_HOROSCOPE, {
      cache: "no-store",
    });

    if (response.ok) {
      data = await response.json();
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }

  const title = data?.meta_details?.meta_title || "Astroved Horoscopes ";
  const description =
    data?.meta_details?.meta_description || "Astroved Horoscopes";

  return {
    title,
    description,
  };
}

const HoroscopeMonthlyStaticPage = async () => {
  let data = null;
  let error = null;

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_MONTHLY_HOROSCOPE, {
      cache: "no-store",
    });
    if (response.ok) {
      data = await response.json();
    } else {
      const errorData = await response.json();
      error = errorData.status;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }

  return <CategoryComponent data={data} error={error} />;
};

export default HoroscopeMonthlyStaticPage;
