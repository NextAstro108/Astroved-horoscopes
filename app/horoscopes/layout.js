


// import React from "react";
// import Footer from '@/Component/English/commonFooter/Footer';
// import MenuHeaderJson from '@/Component/English/commonHeaders/MenuHeaderJson';
// import LoginHeader from "@/Component/English/commonHeaders/LoginHeader";
// import "./horoscope.css";
// import Script from "next/script";
// import HelloBar from "@/Component/English/commonHeaders/HelloBar";
// import PopupBar from "@/Component/English/commonHeaders/PopupBar";
// // import CanonicalURL from "@/Component/English/Blogs/CanonicalURL";



// export default function HoroscopeLayout({ children}) {
//   return (
//     <html lang="en">
//       <head>
    
      
//         <link rel="icon" href={`${process.env.NEXT_PUBLIC_HOME_BASE}/blogs_Images/favicon.ico?v=4`} />

        
        
//         <link href="https://qa.astroved.com/css/horoscope-list-v1.css" rel="stylesheet"></link>
       
//         <link href="https://qa.astroved.com/wp-content/themes/Astroved/css/bootstrap.min.css?ver=1.0.0#asyncload" rel="stylesheet"></link>
//         <link rel='stylesheet' id='style-dailyhoroscope-css' href='https://qa.astroved.com/wp-content/themes/Astroved/css/style-dailyhoroscope.css?ver=1.0.0#asyncload' type='text/css' media='all' />
//         <link rel='stylesheet' id='style-css' href='https://qa.astroved.com/wp-content/themes/Astroved/style.css?ver=1.0.0#asyncload' type='text/css' media='all' />

//         {/* hompage  */}
//         <link href="https://qa.astroved.com/wp-content/themes/Astroved/css/horoscope.css" rel="stylesheet"></link>
//      {/* <CanonicalURL/> */}
      
//         <Script id="google-tag-manager" strategy="afterInteractive">
//           {`(function(w,d,s,l,i){
//               w[l]=w[l]||[];
//               w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
//               var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),
//               dl=l!='dataLayer' ? '&l='+l : '';
//               j.async=true;
//               j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
//               f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-TRS65PJ');`}
//         </Script>
//         <link rel="stylesheet" href="https://qa.astroved.com/css/av-common-header-v2.css"/>
//         <link rel="stylesheet" href="https://qa.astroved.com/css/av-common-footer-v7.css"/>
     
//       </head>

     
//       <body>
     
//         <Script  src="https://www.astroved.com/js/script.js" defer/>
        
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-TRS65PJ"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>
//         <HelloBar/>
//         <PopupBar/>
//         <LoginHeader/>
//         <MenuHeaderJson/>
//         {children}
//         <Footer/>
        
//       </body>
//     </html>
//   );
// }








import React from "react";
import Footer from '@/Component/English/commonFooter/Footer';
import MenuHeaderJson from '@/Component/English/commonHeaders/MenuHeaderJson';
import LoginHeader from "@/Component/English/commonHeaders/LoginHeader";
import "./horoscope.css";
import Script from "next/script";
import HelloBar from "@/Component/English/commonHeaders/HelloBar";
import PopupBar from "@/Component/English/commonHeaders/PopupBar";


import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

export default function HoroscopeLayout({ children}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_HOME_BASE}/blogs_Images/favicon.ico`} />
        <link href="https://qa.astroved.com/css/horoscope-list-v1.css" rel="stylesheet"></link>
       
        <link href="https://qa.astroved.com/wp-content/themes/Astroved/css/bootstrap.min.css?ver=1.0.0#asyncload" rel="stylesheet"></link>
        <link rel='stylesheet' id='style-dailyhoroscope-css' href='https://qa.astroved.com/wp-content/themes/Astroved/css/style-dailyhoroscope.css?ver=1.0.0#asyncload' type='text/css' media='all' />
        <link rel='stylesheet' id='style-css' href='https://qa.astroved.com/wp-content/themes/Astroved/style.css?ver=1.0.0#asyncload' type='text/css' media='all' />

        {/* hompage  */}
        <link href="https://qa.astroved.com/wp-content/themes/Astroved/css/horoscope.css" rel="stylesheet"></link>
     
      
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer' ? '&l='+l : '';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TRS65PJ');`}
        </Script>
        <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_WEB_BASE}/css/av-common-header-v5.css`}/>
        <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_WEB_BASE}/css/av-common-footer-v7.css`}/>
       
     
      </head>

     
      <body>
     
        <Script  src="https://www.astroved.com/js/script.js" defer/>
        
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRS65PJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <HelloBar/>
        <PopupBar/>
        <LoginHeader/>
        <MenuHeaderJson/>
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
