


// import { useState,useEffect } from 'react';
// import { HoroscopesUrl } from '@/Component/Config/horoscopes';

// const DynamicCategoryUrl = ({ signvalue, capitalizedSign,category }) => {
//   // State to manage which category is currently selected
//   // console.log(category)
//   const [selectedCategory, setSelectedCategory] = useState('');
  

//   const baseUrl = HoroscopesUrl.CategoryBase[category];
//   useEffect(() => {
   
//      const url = window.location.href;
    
   
//      setSelectedCategory(url);
//   }, []);
//   const getCategorySlug = (categoryId) => {
//     let slug = '';
//     switch (category) {
//       case 'MonthlyHoroscope':
//         slug = HoroscopesUrl.monthlySlugs[categoryId];
//         break;
//       case 'YearlyHoroscope':
//         slug = HoroscopesUrl.yearlySlug[categoryId];
//         break;
//       case 'WeeklyHoroscope':
//         slug = HoroscopesUrl.weeklySlugs[categoryId];
//         break;
//       default:
//         slug = HoroscopesUrl.monthlySlugs[categoryId]; // Default to monthly
//         break;
//     }
//     return `${baseUrl}${signvalue}${slug}`;
//   };
 
//   // List of categories
//   const categories = [
//     { id: 'general', label: 'General', image: '/horoscope_Images/life1.webp' },
//     { id: 'lovemarriage', label: 'Love & Relationships', image: '/horoscope_Images/life5.webp' },
//     { id: 'money', label: 'Money', image: '/horoscope_Images/finances-icon.webp' },
//     { id: 'career', label: 'Career', image: '/horoscope_Images/life2.webp' },
//     { id: 'health', label: 'Health', image: '/horoscope_Images/life3.webp' },
//     { id: 'student', label: 'Students and Education', image: '/horoscope_Images/educations-cion.webp' },
//     { id: 'business', label: 'Business', image: '/horoscope_Images/life2.webp' },
//     { id: 'professionals', label: 'Professionals', image: '/horoscope_Images/life2.webp' },
    
//   ];
//   let categoriesToShow = [];

//   if (category === 'MonthlyHoroscope') {
//     categoriesToShow = categories.slice(0, 7); // Show 7 categories for monthly
//   } else if (category === 'YearlyHoroscope') {
//     categoriesToShow = categories.slice(0, 6); // Show 6 categories for yearly
//   } else if (category === 'WeeklyHoroscope') {
//     categoriesToShow = categories.slice(0, 5); // Show 5 categories for weekly
//   }

//   return (
//     <div className="horo-panel-weekly">
//       {categoriesToShow.map((category) => {
//         const categoryUrl = getCategorySlug(category.id);


        
//         // Check if the current URL matches either the main URL or the fallback URL for the category
//         const shouldHide = selectedCategory.includes(categoryUrl);

//         return (
//           <div
//             key={category.id}
//             className="lifestyle-box-big"
//             style={{ display: shouldHide ? 'none' : 'block' }} // Hide if matches the URL
//           >
//             <a
//               href={categoryUrl}
//               className={category.id}
//               // onClick={() => setSelectedCategory(categoryUrl)}
//             >
            
//               <div className={`round-wrap${category.id === 'money' ? 1 : category.id === 'health' ? 2 : category.id === 'student' ? 4 : 3}`}>
//                 <img src={category.image} alt={category.label} />
//               </div>
//               <p>{capitalizedSign} <br/>{category.label}</p>
//             </a>
//           </div>
//         );
//       })}

//       <div className="clear height20"></div>
//       <a href="javascript:void(0)" id="monthly_all" className="">
//         <div className="center">
//           <div className="btn-hover1">
//             View All Categories
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default DynamicCategoryUrl;






"use client"

import { useState,useEffect } from 'react';
import { HoroscopesUrl } from '@/Component/Config/horoscopes';
let url = '';
const DynamicCategoryUrl = ({ signvalue, capitalizedSign,category }) => {

  const [selectedCategory, setSelectedCategory] = useState('');
  

  const baseUrl = HoroscopesUrl.CategoryBase[category];
  useEffect(() => {
     url = window.location.href;
     setSelectedCategory(url);
  }, []);
  
 
  let slug = '';


  const getCategorySlug = (categoryId) => {
    
    switch (category) {
      case 'MonthlyHoroscope':
        slug = HoroscopesUrl.monthlySlugs[categoryId];
        break;
      case 'YearlyHoroscope':
        slug = HoroscopesUrl.yearlySlug[categoryId];
        break;
      case 'WeeklyHoroscope':
        slug = HoroscopesUrl.weeklySlugs[categoryId];
        break;
      default:
        slug = HoroscopesUrl.monthlySlugs[categoryId]; // Default to monthly
        break;
    }
    // return `${baseUrl}${signvalue}${slug}` ;
    return   `${baseUrl}${signvalue}${slug}` ;
  };
  // List of categories
  const categories = [
    { id: 'general', label: 'General', image: `${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life1.webp` },
    { id: 'lovemarriage', label: 'Love & Relationships', image:`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}/life5.webp` },
    { id: 'money', label: 'Money', image: `${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}finances-icon.webp` },
    { id: 'career', label: 'Career', image: `${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life2.webp` },
    { id: 'health', label: 'Health', image: `${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life3.webp` },
    { id: 'student', label: 'Students and Education', image: `${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}educations-cion.webp` },
    { id: 'business', label: 'Business', image: `${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life2.webp` },
    { id: 'professionals', label: 'Professionals', image: `${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life2.webp` },
    
  ];
  let categoriesToShow = [];

  if (category === 'MonthlyHoroscope') {
    categoriesToShow = categories.slice(0, 7); // Show 7 categories for monthly
  } else if (category === 'YearlyHoroscope') {
    categoriesToShow = categories.slice(0, 6); // Show 6 categories for yearly
  } else if (category === 'WeeklyHoroscope') {
    categoriesToShow = categories.slice(0, 5); // Show 5 categories for weekly
  }


  return (
    
    <div className="horo-panel-weekly">
      {categoriesToShow.map((category) => {
        const categoryUrl = getCategorySlug(category.id);


        
        // Check if the current URL matches either the main URL or the fallback URL for the category
        let shouldHide = selectedCategory.includes(categoryUrl);

        // Remove the query string (everything after '?')
        var urlWithoutQuery = url.split('?')[0];

      
        // Split the URL by slashes and get the last segment
        var lastSegment = urlWithoutQuery.split('/').pop();
  
        return (
          <div
            key={category.id}
            className="lifestyle-box-big"
            style={{ display: (shouldHide || (category.id == 'general' && lastSegment.toLowerCase() === signvalue ) ) ? 'none' : 'block' }} // Hide if matches the URL
          >
            
            <a
              href={categoryUrl}
              className={category.id}
              
            >
            
              <div className={`round-wrap${category.id === 'money' ? 1 : category.id === 'health' ? 2 : category.id === 'student' ? 4 : 3}`}>
                <img src={category.image} alt={category.label}  />
              </div>
           
              <p>{capitalizedSign} <br/>{category.label}</p>
            </a>
          </div>
         
        );
      })}

      <div className="clear height20"></div>
      <a href="#!" id="monthly_all" className="">
        <div className="center">
          <div className="btn-hover1">
            View All Categories
          </div>
        </div>
      </a>
    </div>
  );
};

export default DynamicCategoryUrl;













