






// "use client";

// import React, { useState, useEffect } from "react";
// import he from 'he';
// import { CURRENT_CONFIG } from "@/Component/Config/Config";

// export default function HompageComponent({ data, error, newnumber }) {
//   const { podcast_list, total_podcast_count, categories_list } = data;

//   // State for current page, search term, and search results
//   const [currentPage, setCurrentPage] = useState(Number(newnumber));
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [totalSearchCount, setTotalSearchCount] = useState(0);
//   const [isSearching, setIsSearching] = useState(false);

//   const productsPerPage = 12; // We want 12 results per page
//   const tabsToShow = 1;

//   useEffect(() => {
//     const queryPageNumber = new URLSearchParams(window.location.search).get("PageNumber");
//     if (queryPageNumber) {
//       setCurrentPage(Number(queryPageNumber)); // Set the page number from the URL query parameter
//     }
//   }, []); 

//   const totalPages = Math.ceil( total_podcast_count / productsPerPage);

//   const getVisibleTabs = () => {
//     const start = Math.max(currentPage - tabsToShow, 2); 
//     const end = Math.min(currentPage + tabsToShow, totalPages - 1); 
//     const tabs = Array.from({ length: end - start + 1 }, (_, i) => start + i);

//     if (start > 2) tabs.unshift("...");
//     if (end < totalPages - 1) tabs.push("...");

//     return [1, ...tabs, totalPages];
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     if (isSearching) {
//       fetchSearchResults(searchTerm, page);
//     } else {
//       window.location.href = `${CURRENT_CONFIG.names.Podcast_single}/page/${page}`;
//     }
//   };

//   const handlePrevious = () => {
//     const newPage = Math.max(currentPage - 1, 1);
//     setCurrentPage(newPage);
//     if (isSearching) {
//       fetchSearchResults(searchTerm, newPage);
//     } else {
//       window.location.href = `${CURRENT_CONFIG.names.Podcast_single}/page/${newPage}`;
//     }
//   };

//   const handleNext = () => {
//     const newPage = Math.min(currentPage + 1, totalPages);
//     setCurrentPage(newPage);
//     if (isSearching) {
//       fetchSearchResults(searchTerm, newPage);
//     } else {
//       window.location.href = `${CURRENT_CONFIG.names.Podcast_single}/page/${newPage}`;
//     }
//   };

//   // Fetch search results from the API
//   const fetchSearchResults = (keyword, page = 1) => {
//     fetch(`https://qaphplexus.astroved.com/wp-json/api/v1/search-astrology-podcast/all/${keyword}?page=${page}`)
//       .then(res => res.json())
//       .then(data => {
//         // console.log(data)
//         setSearchResults(data.podcast_list);
//                 // console.log(data.podcasts)
//                 setTotalSearchCount(data.total_category_count);
//                 console.log(data.total_category_count)
//                 setIsSearching(true);
//       })
//       .catch(err => {
//         console.error('Error fetching search results:', err);
//         setIsSearching(false);
//       });
//   };

//   const handleSearch = () => {
//     setCurrentPage(1); // Reset to the first page on search
//     fetchSearchResults(searchTerm);
//   };

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Handle data fetching and error states
//   if (!data) {
//     return (
//       <div className="container">
//         <h5
//           style={{
//             padding: "20px",
//             borderTop: "6px solid #00a8ff",
//             marginTop: "20px",
//             fontWeight: "normal",
//             fontSize: "1.25rem",
//             borderRadius: "5px",
//           }}
//         >
//           No posts found
//         </h5>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container">
//         <h5
//           style={{
//             padding: "20px",
//             borderTop: "6px solid #00a8ff",
//             marginTop: "20px",
//             fontWeight: "normal",
//             fontSize: "1.25rem",
//             borderRadius: "5px",
//           }}
//         >
//           Error fetching data
//         </h5>
//       </div>
//     );
//   }



//   return (
//     <>
//       <div className="podcast">
//         <div className="ashbg">
//           <div className="container">
//             <div className="addthis_inline_follow_toolbox"></div>
//             <div className="clear"></div>
//             <div className="topbanner">
//               <h1><span className="mob-view"><img src="/images/pod3.png" /></span><span className="subtitle">AstroVed Astrology</span><br />PODCAST </h1>
//             </div>
//             <div className="clear"></div>
//             <p className="podcast-title">Learn about Vedic Mantras and Suktams, their Benefits, powerful Meditation Techniques for Health and Vitality, Monthly Predictions for Moon Signs, and More… </p>
//             <h2><span className="pink">Discover</span><br /> Our Latest Podcasts <p></p> </h2>
//             <div id="categorysearch" className="search-podcast">
//               <input
//                 type="text"
//                 className="podcastsearch"
//                 id="podcast_search"
//                 name="podcast_search"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={handleInputChange}
//               />
//               <button onClick={handleSearch} className="search-btn">Search</button>
//             </div>
//             <div className="line"></div>
//             <p className="pink5">Category </p>
//             <div className="dkrp-section">
//               <div className="container">
//                 <div className="dkrp-nav">
//                   <ul className="dkrp-navs rel-menu">
//                     {categories_list.map((result, index) => (
//                       <li className="nav-item" key={index}>
//                         <a className="nav-link scroll" href={`${CURRENT_CONFIG.names.Podcast_single}/category/${result.slug}/1`}>{result.name}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="clear line"></div>
//             <div className="clear space50"></div>

//             <div id="pod_search_result" className="pod_search_result">
//               {podcast_list.map((result, index) => (
//                 <div className="podcast-wrapper" key={index}>
//                   <div className="box">
//                     <div className="orange-border"></div>
//                     <div className="height20 clear"></div>
//                     <h3>{he.decode(result.title)} <br />
//                       <span className="date">{result.date}</span>
//                     </h3>
//                     <img src={result.featured_image} />
//                     {he.decode(result.excerpt)}
//                     <div className="pink-border"></div>
//                     <a href={`${CURRENT_CONFIG.names.Podcast_single}/${result.slug}`} rel="noopener noreferrer" target="_blank">
//                       <div className="orange-btn">
//                         <img src="https://www.astroved.com/images/play-btn.png" />Listen Now
//                       </div>
//                     </a>
//                     <div className="clear"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div id="pagination" className="pagination" style={{ textAlign: "center", marginTop: "20px", padding: "30px" }}>
//           {currentPage > 1 && (
//             <button
//               onClick={() => handlePageChange(1)}
//               className="pagination-arrow"
//               style={{
//                 margin: "0 5px",
//                 padding: "7px 14px",
//                 backgroundColor: '#f0f0f0',
//                 color: '#666',
//                 border: "1px solid #bfbfbf",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: '14px',
//               }}
//             >
//               &lt;First {/* Left arrow symbol */}
//             </button>
//           )}

//           {currentPage > 1 && (
//             <button
//               onClick={handlePrevious}
//               className="pagination-arrow"
//               style={{
//                 margin: "0 5px",
//                 padding: "7px 14px",
//                 backgroundColor: '#f0f0f0',
//                 color: '#666',
//                 borderRadius: "5px",
//                 border: "1px solid #bfbfbf",
//                 cursor: "pointer",
//                 fontSize: '14px',
//               }}
//             >
//               &lt; {/* Left arrow symbol */}
//             </button>
//           )}

//           {getVisibleTabs().map((page, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(page)}
//               className={`pagination-tab ${currentPage === page ? "active" : ""}`}
//               disabled={page === "..."}
//               style={{
//                 margin: "0 5px",
//                 padding: "7px 14px",
//                 backgroundColor: currentPage === page ? "#f96823" : "#f0f0f0",
//                 color: currentPage === page ? "#fff" : "#666",
//                 border: currentPage === page ? "1px solid black" : "1px solid #bfbfbf",
//                 borderRadius: "5px",
//                 cursor: page !== "..." ? "pointer" : "default",
//                 fontSize: "14px",
//               }}
//             >
//               {page}
//             </button>
//           ))}

//           {currentPage < totalPages && (
//             <button
//               onClick={handleNext}
//               className="pagination-arrow"
//               style={{
//                 margin: "0 5px",
//                 padding: "7px 14px",
//                 backgroundColor: '#f0f0f0',
//                 color: '#666',
//                 border: "1px solid #bfbfbf",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: '14px',
//               }}
//             >
//               &gt;
//             </button>
//           )}

//           {currentPage < totalPages && (
//             <button
//               onClick={() => handlePageChange(totalPages)}
//               className="pagination-arrow"
//               style={{
//                 margin: "0 5px",
//                 padding: "7px 14px",
//                 backgroundColor: '#f0f0f0',
//                 color: '#666',
//                 border: "1px solid #bfbfbf",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: '14px',
//               }}
//             >
//               Last &gt;
//             </button>
//           )}
//         </div>   
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





// "use client"
// import React, { useState, useEffect } from "react";
// import he from 'he';
// import { CURRENT_CONFIG } from "@/Component/Config/Config";

// export default function HompageComponent({ data, error, newnumber }) {
//   const { podcast_list, total_podcast_count, categories_list } = data;

//   // State for current page, search term, and search results
//   const [currentPage, setCurrentPage] = useState(Number(newnumber));
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
 
//   const [isSearching, setIsSearching] = useState(false);
//   const [searchCurrentPage, setsearchCurrentPage] = useState(1);
//   const [totalPodcastCount, setTotalPodcastCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   const productsPerPage = 12; // We want 12 results per page
//   const tabsToShow = 1;
  
  
  

//   useEffect(() => {
//     const queryPageNumber = new URLSearchParams(window.location.search).get("PageNumber");
//     if (queryPageNumber) {
//       setCurrentPage(Number(queryPageNumber)); // Set the page number from the URL query parameter
//     }
//   }, []); 

//   const totalPages = Math.ceil(total_podcast_count / productsPerPage);

//   const getVisibleTabs = () => {
//     const start = Math.max(currentPage - tabsToShow, 2); 
//     const end = Math.min(currentPage + tabsToShow, totalPages - 1); 
//     const tabs = Array.from({ length: end - start + 1 }, (_, i) => start + i);

//     if (start > 2) tabs.unshift("...");
//     if (end < totalPages - 1) tabs.push("...");

//     return [1, ...tabs, totalPages];
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.location.href = `${CURRENT_CONFIG.names.Podcast_single}/page/${page}`;
//   };

//   const handlePrevious = () => {
//     const newPage = Math.max(currentPage - 1, 1);
//     setCurrentPage(newPage);
//     window.location.href = `${CURRENT_CONFIG.names.Podcast_single}/page/${newPage}`;
//   };

//   const handleNext = () => {
//     const newPage = Math.min(currentPage + 1, totalPages);
//     setCurrentPage(newPage);
//     window.location.href = `${CURRENT_CONFIG.names.Podcast_single}/page/${newPage}`;
//   };

 



//   // Handle data fetching and error states
//   if (!data) {
//     return (
//       <div className="container">
//         <h5
//           style={{
//             padding: "20px",
//             borderTop: "6px solid #00a8ff",
//             marginTop: "20px",
//             fontWeight: "normal",
//             fontSize: "1.25rem",
//             borderRadius: "5px",
//           }}
//         >
//           No posts found
//         </h5>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container">
//         <h5
//           style={{
//             padding: "20px",
//             borderTop: "6px solid #00a8ff",
//             marginTop: "20px",
//             fontWeight: "normal",
//             fontSize: "1.25rem",
//             borderRadius: "5px",
//           }}
//         >
//           Error fetching data
//         </h5>
//       </div>
//     );
//   }
//   const fetchSearchResults= async(keyword, page = 1)=>{
//     try {
//       setLoading(true)
//       const response=await fetch(`https://qaphplexus.astroved.com/wp-json/api/v1/search-astrology-podcast/all/${keyword}/${page}/12`)
      
//       if(response.ok){
//          const searchResult= await response.json()
//         console.log("{{{{{")
//         console.log(searchResult)
//         setSearchResults(searchResult.podcast_list);
//         setTotalPodcastCount(searchResult.total_podcast_count);
//         setIsSearching(true);
        
//       }
     
//     } catch (error) {
//       console.error('Error fetching search results:', err);
//       setIsSearching(false);
//     }finally {
//       setLoading(false); // Stop loading after fetching
//     }
//    }

//    const searchTabsToShow = 2; 
//   const handleSearch = () => {
//     setsearchCurrentPage(1); // Reset to page 1 when starting a new search
//     // fetchSearchResults(searchTerm, 1);
//     if (searchTerm.trim() === '') {
//       setSearchResults([]);  // Reset results if search term is empty
//       setIsSearching(false);  // Stop searching
//       setTotalPodcastCount(0);  // Clear total count
//     } else {
//       fetchSearchResults(searchTerm, 1);
//     }
//   };

//   const searchHandlePageChange = (pageNumber) => {
//     setsearchCurrentPage(pageNumber);
//     fetchSearchResults(searchTerm, pageNumber); // Fetch new results for the selected page
//   };


//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

  
//   const searchHandlePrevious = () => {
//     const newPage = Math.max(searchCurrentPage - 1, 1);
//     setsearchCurrentPage(newPage);
//     fetchSearchResults(searchTerm, newPage);
//   };

//   const searchHandleNext = () => {
//     const newPage = Math.min(searchCurrentPage + 1, searchTotalPages);
//     setsearchCurrentPage(newPage);
//     fetchSearchResults(searchTerm, newPage);
//   };

//   const searchGetVisibleTabs = () => {
//     const start = Math.max(searchCurrentPage - searchTabsToShow, 2); 
//     const end = Math.min(searchCurrentPage + searchTabsToShow, searchTotalPages - 1); 
//     const tabs = Array.from({ length: end - start + 1 }, (_, i) => start + i);

//     if (start > 2) tabs.unshift("...");
//     if (end < searchTotalPages - 1) tabs.push("...");

//     return [1, ...tabs, searchTotalPages];
//   };


 
//   const searchTotalPages = Math.ceil(totalPodcastCount / 12); 
 
//   const showPagination = totalPodcastCount > 12;

 
//   return (
//     <>
//       <div className="podcast">
//         <div className="ashbg">
//           <div className="container">
//             <div className="addthis_inline_follow_toolbox"></div>
//             <div className="clear"></div>
//             <div className="topbanner">
//               <h1><span className="mob-view"><img src="/images/pod3.png" /></span><span className="subtitle">AstroVed Astrology</span><br />PODCAST </h1>
//             </div>
//             <div className="clear"></div>
//             <p className="podcast-title">Learn about Vedic Mantras and Suktams, their Benefits, powerful Meditation Techniques for Health and Vitality, Monthly Predictions for Moon Signs, and More… </p>
//             <h2><span className="pink">Discover</span><br /> Our Latest Podcasts <p></p> </h2>
//             <div id="categorysearch" className="search-podcast">
//               <input
//                 type="text"
//                 className="podcastsearch"
//                 id="podcast_search"
//                 name="podcast_search"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={handleInputChange}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') {
//                     handleSearch();
//                   }
//                 }}
//               />
//               <button onClick={handleSearch} 
//               id="search_submit" 
//               className="search-btn">
              
//                 <i class="fa fa-search main" aria-hidden="true"></i>
//                 </button>
//             </div>
//             <div className="line"></div>
//             <p className="pink5">Category </p>
//             <div className="dkrp-section">
//               <div className="container">
//                 <div className="dkrp-nav">
//                   <ul className="dkrp-navs rel-menu">
//                     {categories_list.map((result, index) => (
//                       <li className="nav-item" key={index}>
//                         <a className="nav-link scroll" href={`${CURRENT_CONFIG.names.Podcast_single}/category/${result.slug}/1`}>{result.name}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="clear line"></div>
//             <div className="clear space50"></div>

//             <div id="pod_search_result" className="pod_search_result">
          

           
//            {loading && isSearching ? (
//                          <div className="loading-spinner">
                   
//                          <p>Loading...</p>
//                      </div>
//            ):(
//             isSearching ? (
  
//               searchResults && searchResults.length > 0 ? (
//                 searchResults.map((result, index) => (
//                   <div className="podcast-wrapper" key={index}>
                    
//                     <div className="box">
//                       <div className="orange-border"></div>
//                       <div className="height20 clear"></div>
//                       <h3>{he.decode(result.title)} <br />
//                         <span className="date">{result.date}</span>
//                       </h3>
//                       <img src={result.featured_image} />
//                       {he.decode(result.excerpt)}
//                       <div className="pink-border"></div>
//                       <a href={`${CURRENT_CONFIG.names.Podcast_single}/${result.slug}`} rel="noopener noreferrer" target="_blank">
//                         <div className="orange-btn">
//                           <img src="https://www.astroved.com/images/play-btn.png" />Listen Now
//                         </div>
//                       </a>
//                       <div className="clear"></div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div>No search results found</div>
//               )
//               ) : (
//                 // Default podcasts list rendering
//                 podcast_list && podcast_list.length > 0 ? (
//                   podcast_list.map((result, index) => (
//                     <div className="podcast-wrapper" key={index}>
//                       <div className="box">
//                         <div className="orange-border"></div>
//                         <div className="height20 clear"></div>
//                         <h3>{he.decode(result.title)} <br />
//                           <span className="date">{result.date}</span>
//                         </h3>
//                         <img src={result.featured_image} />
//                         {he.decode(result.excerpt)}
//                         <div className="pink-border"></div>
//                         <a href={`${CURRENT_CONFIG.names.Podcast_single}/${result.slug}`} rel="noopener noreferrer" target="_blank">
//                           <div className="orange-btn">
//                             <img src="https://www.astroved.com/images/play-btn.png" />Listen Now
//                           </div>
//                         </a>
//                         <div className="clear"></div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   // Show a message if no podcasts are available
//                   <div>No podcasts available</div>
//                 )
//               )


//            )}

  
 
//             </div>

          
//             {isSearching ?(
// showPagination &&(
//   <div  style={{ textAlign: "center", marginTop: "20px", padding: "30px", display:"flex",justifyContent:"center"}}>
//   <button onClick={searchHandlePrevious} 
//   style={{
//     margin: "0 5px",
//     padding: "7px 14px",
//     backgroundColor: '#f0f0f0',
//     color: '#666',
//     border: "1px solid #bfbfbf",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: '14px',
//   }}

//   >Previous</button>
//   <div>
//     {searchGetVisibleTabs().map((tab, index) => (
//       <button
//         key={index}
//         onClick={() => searchHandlePageChange(tab)}
//         className={searchCurrentPage === tab ? "active" : ""}
//         disabled={tab === '...'}
//         style={{
//           margin: "0 5px",
//           padding: "7px 14px",
//           backgroundColor: searchCurrentPage === tab ? "#f96823" : "#f0f0f0",
//           color: searchCurrentPage === tab ? "#fff" : "#666",
//           border: searchCurrentPage === tab ? "1px solid black" : "1px solid #bfbfbf",
//           borderRadius: "5px",
//           cursor: tab !== "..." ? "pointer" : "default",
//           fontSize: "14px",
//         }}
//       >
//         {tab}
//       </button>
//     ))}
//   </div>
//   <button onClick={searchHandleNext}
  
//   style={{
//     margin: "0 5px",
//     padding: "7px 14px",
//     backgroundColor: '#f0f0f0',
//     color: '#666',
//     border: "1px solid #bfbfbf",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: '14px',
//   }}
//    >Next</button>
// </div>
// )
              
//             ):(
//  <div id="pagination" className="pagination" style={{ textAlign: "center", marginTop: "20px", padding: "30px" }}>
//               {currentPage > 1 && (
//                 <button
//                   onClick={() => handlePageChange(1)}
//                   className="pagination-arrow"
//                   style={{
//                     margin: "0 5px",
//                     padding: "7px 14px",
//                     backgroundColor: '#f0f0f0',
//                     color: '#666',
//                     border: "1px solid #bfbfbf",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                     fontSize: '14px',
//                   }}
//                 >
//                   &lt;First 
//                 </button>
//               )}

//               {currentPage > 1 && (
//                 <button
//                   onClick={handlePrevious}
//                   className="pagination-arrow"
//                   style={{
//                     margin: "0 5px",
//                     padding: "7px 14px",
//                     backgroundColor: '#f0f0f0',
//                     color: '#666',
//                     borderRadius: "5px",
//                     border: "1px solid #bfbfbf",
//                     cursor: "pointer",
//                     fontSize: '14px',
//                   }}
//                 >
//                   &lt; 
//                 </button>
//               )}

//               {getVisibleTabs().map((page, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handlePageChange(page)}
//                   className={`pagination-tab ${currentPage === page ? "active" : ""}`}
//                   disabled={page === "..."}
//                   style={{
//                     margin: "0 5px",
//                     padding: "7px 14px",
//                     backgroundColor: currentPage === page ? "#f96823" : "#f0f0f0",
//                     color: currentPage === page ? "#fff" : "#666",
//                     border: currentPage === page ? "1px solid black" : "1px solid #bfbfbf",
//                     borderRadius: "5px",
//                     cursor: page !== "..." ? "pointer" : "default",
//                     fontSize: "14px",
//                   }}
//                 >
//                   {page}
//                 </button>
//               ))}

//               {currentPage < totalPages && (
//                 <button
//                   onClick={handleNext}
//                   className="pagination-arrow"
//                   style={{
//                     margin: "0 5px",
//                     padding: "7px 14px",
//                     backgroundColor: '#f0f0f0',
//                     color: '#666',
//                     border: "1px solid #bfbfbf",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                     fontSize: '14px',
//                   }}
//                 >
//                   &gt;
//                 </button>
//               )}

//               {currentPage < totalPages && (
//                 <button
//                   onClick={() => handlePageChange(totalPages)}
//                   className="pagination-arrow"
//                   style={{
//                     margin: "0 5px",
//                     padding: "7px 14px",
//                     backgroundColor: '#f0f0f0',
//                     color: '#666',
//                     border: "1px solid #bfbfbf",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                     fontSize: '14px',
//                   }}
//                 >
//                   Last &gt;
//                 </button>
//               )}
//             </div>    
//             )}
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }







"use client"
import React, { useState, useEffect } from "react";
import he from 'he';
import { CURRENT_CONFIG } from "@/Component/Config/Config";

export default function HompageComponent({ data, error, newnumber }) {
  const { podcast_list, total_podcast_count, categories_list } = data;

  // State for current page, search term, and search results
  const [currentPage, setCurrentPage] = useState(Number(newnumber));
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 
  const [isSearching, setIsSearching] = useState(false);
  const [searchCurrentPage, setsearchCurrentPage] = useState(1);
  const [totalPodcastCount, setTotalPodcastCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const productsPerPage = 12; // We want 12 results per page
  const tabsToShow = 1;
  
  
  

  useEffect(() => {
    const queryPageNumber = new URLSearchParams(window.location.search).get("PageNumber");
    if (queryPageNumber) {
      setCurrentPage(Number(queryPageNumber)); // Set the page number from the URL query parameter
    }
  }, []); 

  const totalPages = Math.ceil(total_podcast_count / productsPerPage);

  const getVisibleTabs = () => {
    const start = Math.max(currentPage - tabsToShow, 2); 
    const end = Math.min(currentPage + tabsToShow, totalPages - 1); 
    const tabs = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    if (start > 2) tabs.unshift("...");
    if (end < totalPages - 1) tabs.push("...");

    return [1, ...tabs, totalPages];
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.location.href = `${CURRENT_CONFIG.names.Podcast_single}/page/${page}`;
  };

  const handlePrevious = () => {
    const newPage = Math.max(currentPage - 1, 1);
    setCurrentPage(newPage);
    window.location.href = `${CURRENT_CONFIG.names.Podcast_single}/page/${newPage}`;
  };

  const handleNext = () => {
    const newPage = Math.min(currentPage + 1, totalPages);
    setCurrentPage(newPage);
    window.location.href = `${CURRENT_CONFIG.names.Podcast_single}/page/${newPage}`;
  };

 



  // Handle data fetching and error states
  if (!data) {
    return (
      <div className="container">
        <h5
          style={{
            padding: "20px",
            borderTop: "6px solid #00a8ff",
            marginTop: "20px",
            fontWeight: "normal",
            fontSize: "1.25rem",
            borderRadius: "5px",
          }}
        >
          No posts found
        </h5>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h5
          style={{
            padding: "20px",
            borderTop: "6px solid #00a8ff",
            marginTop: "20px",
            fontWeight: "normal",
            fontSize: "1.25rem",
            borderRadius: "5px",
          }}
        >
          Error fetching data
        </h5>
      </div>
    );
  }
  const fetchSearchResults= async(keyword, page = 1)=>{
    try {
      setLoading(true)
      const response=await fetch(`https://qaphplexus.astroved.com/wp-json/api/v1/search-astrology-podcast/all/${keyword}/${page}/12`)
      
      if(response.ok){
         const searchResult= await response.json()
        console.log("{{{{{")
        console.log(searchResult)
        setSearchResults(searchResult.podcast_list);
        setTotalPodcastCount(searchResult.total_podcast_count);
        setIsSearching(true);
        
      }
     
    } catch (error) {
      console.error('Error fetching search results:', err);
      setIsSearching(false);
    }finally {
      setLoading(false); // Stop loading after fetching
    }
   }

   const searchTabsToShow = 2; 
  const handleSearch = () => {
    setsearchCurrentPage(1); // Reset to page 1 when starting a new search
    // fetchSearchResults(searchTerm, 1);
    if (searchTerm.trim() === '') {
      setSearchResults([]);  // Reset results if search term is empty
      setIsSearching(false);  // Stop searching
      setTotalPodcastCount(0);  // Clear total count
    } else {
      fetchSearchResults(searchTerm, 1);
    }
  };

  const searchHandlePageChange = (pageNumber) => {
    setsearchCurrentPage(pageNumber);
    fetchSearchResults(searchTerm, pageNumber); // Fetch new results for the selected page
    const element = document.querySelector('.pink5');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  
  const searchHandlePrevious = () => {
    const newPage = Math.max(searchCurrentPage - 1, 1);
    setsearchCurrentPage(newPage);
    fetchSearchResults(searchTerm, newPage);
    const element = document.querySelector('.pink5');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const searchHandleNext = () => {
    const newPage = Math.min(searchCurrentPage + 1, searchTotalPages);
    setsearchCurrentPage(newPage);
    fetchSearchResults(searchTerm, newPage);
    const element = document.querySelector('.pink5');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const searchGetVisibleTabs = () => {
    const start = Math.max(searchCurrentPage - searchTabsToShow, 2); 
    const end = Math.min(searchCurrentPage + searchTabsToShow, searchTotalPages - 1); 
    const tabs = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    if (start > 2) tabs.unshift("...");
    if (end < searchTotalPages - 1) tabs.push("...");

    return [1, ...tabs, searchTotalPages];
  };


 
  const searchTotalPages = Math.ceil(totalPodcastCount / 12); 
 
  const showPagination = totalPodcastCount > 12;

 
  return (
    <>
      <div className="podcast">
        <div className="ashbg">
          <div className="container">
            <div className="addthis_inline_follow_toolbox"></div>
            <div className="clear"></div>
            <div className="topbanner">
              <h1><span className="mob-view"><img src="/images/pod3.png" /></span><span className="subtitle">AstroVed Astrology</span><br />PODCAST </h1>
            </div>
            <div className="clear"></div>
            <p className="podcast-title">Learn about Vedic Mantras and Suktams, their Benefits, powerful Meditation Techniques for Health and Vitality, Monthly Predictions for Moon Signs, and More… </p>
            <h2><span className="pink">Discover</span><br /> Our Latest Podcasts <p></p> </h2>
            <div id="categorysearch" className="search-podcast">
              <input
                type="text"
                className="podcastsearch"
                id="podcast_search"
                name="podcast_search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
              <button onClick={handleSearch} 
              id="search_submit" 
              className="search-btn">
              
                <i class="fa fa-search main" aria-hidden="true"></i>
                </button>
            </div>
            <div className="line"></div>
            <p className="pink5">Category </p>
            <div className="dkrp-section">
              <div className="container">
                <div className="dkrp-nav">
                  <ul className="dkrp-navs rel-menu">
                    {categories_list.map((result, index) => (
                      <li className="nav-item" key={index}>
                        <a className="nav-link scroll" href={`${CURRENT_CONFIG.names.Podcast_single}/category/${result.slug}/1`}>{result.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="clear line"></div>
            <div className="clear space50"></div>

            <div id="pod_search_result" className="pod_search_result">
          

           
           {loading && isSearching ? (
                         <div className="loading-spinner">
                   
                         <p>Loading...</p>
                     </div>
           ):(
            isSearching ? (
  
              searchResults && searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div className="podcast-wrapper" key={index}>
                    
                    <div className="box">
                      <div className="orange-border"></div>
                      <div className="height20 clear"></div>
                      <h3>{he.decode(result.title)} <br />
                        <span className="date">{result.date}</span>
                      </h3>
                      <img src={result.featured_image} />
                      {he.decode(result.excerpt)}
                      <div className="pink-border"></div>
                      <a href={`${CURRENT_CONFIG.names.Podcast_single}/${result.slug}`} rel="noopener noreferrer" target="_blank">
                        <div className="orange-btn">
                          <img src="https://www.astroved.com/images/play-btn.png" />Listen Now
                        </div>
                      </a>
                      <div className="clear"></div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No search results found</div>
              )
              ) : (
                // Default podcasts list rendering
                podcast_list && podcast_list.length > 0 ? (
                  podcast_list.map((result, index) => (
                    <div className="podcast-wrapper" key={index}>
                      <div className="box">
                        <div className="orange-border"></div>
                        <div className="height20 clear"></div>
                        <h3>{he.decode(result.title)} <br />
                          <span className="date">{result.date}</span>
                        </h3>
                        <img src={result.featured_image} />
                        {he.decode(result.excerpt)}
                        <div className="pink-border"></div>
                        <a href={`${CURRENT_CONFIG.names.Podcast_single}/${result.slug}`} rel="noopener noreferrer" target="_blank">
                          <div className="orange-btn">
                            <img src="https://www.astroved.com/images/play-btn.png" />Listen Now
                          </div>
                        </a>
                        <div className="clear"></div>
                      </div>
                    </div>
                  ))
                ) : (
                  // Show a message if no podcasts are available
                  <div>No podcasts available</div>
                )
              )


           )}

  
 
            </div>

          
            {isSearching ?(
showPagination &&(
  <div  style={{ textAlign: "center", marginTop: "20px", padding: "30px", display:"flex",justifyContent:"center"}}>
  <button onClick={searchHandlePrevious} 
  style={{
    margin: "0 5px",
    padding: "7px 14px",
    backgroundColor: '#f0f0f0',
    color: '#666',
    border: "1px solid #bfbfbf",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: '14px',
  }}

  >Previous</button>
  <div>
    {searchGetVisibleTabs().map((tab, index) => (
      <button
        key={index}
        onClick={() => searchHandlePageChange(tab)}
        className={searchCurrentPage === tab ? "active" : ""}
        disabled={tab === '...'}
        style={{
          margin: "0 5px",
          padding: "7px 14px",
          backgroundColor: searchCurrentPage === tab ? "#f96823" : "#f0f0f0",
          color: searchCurrentPage === tab ? "#fff" : "#666",
          border: searchCurrentPage === tab ? "1px solid black" : "1px solid #bfbfbf",
          borderRadius: "5px",
          cursor: tab !== "..." ? "pointer" : "default",
          fontSize: "14px",
        }}
      >
        {tab}
      </button>
    ))}
  </div>
  <button onClick={searchHandleNext}
  
  style={{
    margin: "0 5px",
    padding: "7px 14px",
    backgroundColor: '#f0f0f0',
    color: '#666',
    border: "1px solid #bfbfbf",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: '14px',
  }}
   >Next</button>
</div>
)
              
            ):(
 <div id="pagination" className="pagination" style={{ textAlign: "center", marginTop: "20px", padding: "30px" }}>
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(1)}
                  className="pagination-arrow"
                  style={{
                    margin: "0 5px",
                    padding: "7px 14px",
                    backgroundColor: '#f0f0f0',
                    color: '#666',
                    border: "1px solid #bfbfbf",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: '14px',
                  }}
                >
                  &lt;First 
                </button>
              )}

              {currentPage > 1 && (
                <button
                  onClick={handlePrevious}
                  className="pagination-arrow"
                  style={{
                    margin: "0 5px",
                    padding: "7px 14px",
                    backgroundColor: '#f0f0f0',
                    color: '#666',
                    borderRadius: "5px",
                    border: "1px solid #bfbfbf",
                    cursor: "pointer",
                    fontSize: '14px',
                  }}
                >
                  &lt; 
                </button>
              )}

              {getVisibleTabs().map((page, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(page)}
                  className={`pagination-tab ${currentPage === page ? "active" : ""}`}
                  disabled={page === "..."}
                  style={{
                    margin: "0 5px",
                    padding: "7px 14px",
                    backgroundColor: currentPage === page ? "#f96823" : "#f0f0f0",
                    color: currentPage === page ? "#fff" : "#666",
                    border: currentPage === page ? "1px solid black" : "1px solid #bfbfbf",
                    borderRadius: "5px",
                    cursor: page !== "..." ? "pointer" : "default",
                    fontSize: "14px",
                  }}
                >
                  {page}
                </button>
              ))}

              {currentPage < totalPages && (
                <button
                  onClick={handleNext}
                  className="pagination-arrow"
                  style={{
                    margin: "0 5px",
                    padding: "7px 14px",
                    backgroundColor: '#f0f0f0',
                    color: '#666',
                    border: "1px solid #bfbfbf",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: '14px',
                  }}
                >
                  &gt;
                </button>
              )}

              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className="pagination-arrow"
                  style={{
                    margin: "0 5px",
                    padding: "7px 14px",
                    backgroundColor: '#f0f0f0',
                    color: '#666',
                    border: "1px solid #bfbfbf",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: '14px',
                  }}
                >
                  Last &gt;
                </button>
              )}
            </div>    
            )}
            
          </div>
        </div>
      </div>
    </>
  );
}



