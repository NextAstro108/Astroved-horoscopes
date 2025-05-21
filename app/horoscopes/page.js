
import HoroscopeHome from './HoroscopeHome';

// Mark the page as dynamic
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  let data = null;
 
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_HOROSCOPE_HOME, {
      cache: 'no-store'
    });
   
    if (response.ok) {
      data = await response.json();
    
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }

  const title = data?.meta_details?.title || "Astroved Horoscopes ";
  const description = data?.meta_details?.description || "Astroved Horoscopes";
 

  return {
    title,
    description,
  };
}



const HoroscopePage = async () => {
  let data = null;
  let error = null;

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_HOROSCOPE_HOME, {
      cache: 'no-store'
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

 
  return (
        <HoroscopeHome data={data} error={error}/> 
  );
};


export default HoroscopePage;







           
