import { HoroscopesUrl } from '@/Component/Config/horoscopes';
import YearlyCategory from './YearlyCategory';
import { currentYear } from '@/Component/English/Horoscopes/DateFunctions/DateFunction';
export const dynamic = 'force-dynamic';

export async function generateMetadata({params }) {
  let data = null;
  

 const {sign}= await params
  try {
    const signNumber = HoroscopesUrl.zodiacSignMapping[sign.toLowerCase()];
    const signValue = signNumber || sign;
    console.log(`${process.env.NEXT_PUBLIC_SINGLE_YEARLY_HOROSCOPE}${signValue}/${currentYear}`)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SINGLE_YEARLY_HOROSCOPE}${signValue}/${currentYear}`,
 
      
     
      { cache: 'no-store' });
   
    if (response.ok) {
      data = await response.json();
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }

  const title = data?.meta_details?.title || "Astroved Yearly Horoscopes ";
  const description = data?.meta_details?.description || "Astroved Yearly Horoscopes Description";

  
  return {
    title,
    description,
  };
}




const HoroscopeYearlyPage = async ({params }) => {
  let data = null;
  let error = null;

 const {sign}= await params
  try {
 
    const signNumber = HoroscopesUrl.zodiacSignMapping[sign.toLowerCase()];
    const signValue = signNumber || sign;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SINGLE_YEARLY_HOROSCOPE}${signValue}/${currentYear}`,
 
      
     
      { cache: 'no-store' }
    );

    if (response.ok) {
      data = await response.json();
    
   
      
    } else {
      const errorData = await response.json();
      error = errorData.status;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    error = "An error occurred while fetching data.";
  }
          


  
  return (
  
      <YearlyCategory data={data} error={error}  />
    
  );
};

export default HoroscopeYearlyPage;







