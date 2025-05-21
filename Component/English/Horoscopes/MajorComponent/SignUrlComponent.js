




//defind like this 
// // For Monthly Horoscope
// <HoroscopeUrlComponent category="MonthlyHoroscope" />

// // For Daily Horoscope
// <HoroscopeUrlComponent category="DailyHoroscope" />

// // For Yesterday Horoscope
// <HoroscopeUrlComponent category="YesterdayHoroscope" />

// // For Tomorrow Horoscope
// <HoroscopeUrlComponent category="TomorrowHoroscope" />

// // For Yearly Horoscope
// <HoroscopeUrlComponent category="YearlyHoroscope" />



import { HoroscopesUrl } from "@/Component/Config/horoscopes";
function formatCategoryName(category) {
    return category.replace(/([a-z])([A-Z])/g, '$1 $2'); // Adds a space between camelCase words
}
export default function SignUrlComponent({ category}) {
    // Construct the base URL based on the selected category (default to 'MonthlyHoroscope')
    const baseUrl = HoroscopesUrl.CategoryBase[category];
    const formattedCategory = formatCategoryName(category);
    const splitCategory = formattedCategory.split(' '); // Split by space
    console.log(splitCategory[0]); 
    console.log(splitCategory[1]); 
    return (
        <>
            <div className="sign-wrapper">
                
                <h2 className="sign-tittle">{formattedCategory==="Daily Horoscope"?`${splitCategory[0]} /Today ${splitCategory[1]} by Moon Sign`:`Moon Sign ${formattedCategory}`}</h2>
                <hr />
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign1}`} className="aries-sign"><p>Aries</p></a>
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign2}`} className="taurus-sign"><p>Taurus</p></a>
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign3}`} className="gemini-sign"><p>Gemini</p></a>
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign4}`} className="cancer-sign"><p>Cancer</p></a>
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign5}`} className="leo-sign"><p>Leo</p></a>
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign6}`} className="virgo-sign"><p>Virgo</p></a>
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign7}`} className="libra-sign"><p>Libra</p></a>
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign8}`} className="scorpio-sign"><p>Scorpio</p></a>
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign9}`} className="sagittarius-sign"><p>Sagittarius</p></a>
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign10}`} className="capricorn-sign"><p>Capricorn</p></a>
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign11}`} className="aquarius-sign"><p>Aquarius</p></a>
                <a href={`${baseUrl}${HoroscopesUrl.Signs.Sign12}`} className="pisces-sign"><p>Pisces</p></a>
            </div>
        </>
    );
}
