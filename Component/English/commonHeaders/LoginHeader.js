

"use client";
import React, { useState } from "react";

export default function LoginHeader() {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [loginPanelHtml, setLoginPanelHtml] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form behavior
    if (searchQuery.trim()) {
      // Redirect to search results page with query
      window.location.href = `${process.env.NEXT_PUBLIC_WEB_BASE}/search?q=${encodeURIComponent(
        searchQuery
      )}`;
    }
  };

  // Function to handle the click event
  const handleSigninClick = (event) => {
    event.stopPropagation();

    // Simulate removing the dropdown menu and showing the overlay
    setIsOverlayActive(true);
    fetchingForm()
    // Append login and search panels if they don't exist
    if (!loginPanelHtml) {
      setLoginPanelHtml(
        "<div className='login-panel'></div><div className='search-panel'></div>"
      );
    }

  };
// const fetchingForm=async()=>{
//   try {
//     const response= await  fetch(`${process.env.NEXT_PUBLIC_WEB_BASE}/myaccountphp.aspx`)
//     if (response.ok){
//       const result = await response.text()
      
//       setLoginPanelHtml(result);
      
//     }
    

//   } catch (error) {
//     console.log("error form setting",error)
//   }

// }



const fetchingForm = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_BASE}/myaccountphp.aspx`);
    if (response.ok) {
      const result = await response.text();
      
      // Create a temporary div to hold the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = result;
      
      // Find all script elements in the response
      const scripts = tempDiv.querySelectorAll('script');
      
      // Create a new div to hold the content we'll actually use
      const container = document.createElement('div');
      
      // Process each element from the response
      Array.from(tempDiv.childNodes).forEach(node => {
        if (node.nodeName === 'SCRIPT') {
          // We'll handle scripts separately
          return;
        }
        container.appendChild(node.cloneNode(true));
      });
      
      // Set the HTML content (without scripts) first
      setLoginPanelHtml(container.innerHTML);
      
      // Now execute each script
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        
        // Copy all attributes from the original script
        if (script.src) {
          // Handle external scripts
          newScript.src = script.src;
        } else {
          // Handle inline scripts
          newScript.textContent = script.textContent;
        }
        
        // Copy other attributes
        Array.from(script.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value);
        });
        
        // Append to document head to execute
        document.head.appendChild(newScript);
      });
    }
  } catch (error) {
    console.log("error form setting", error);
  }
};



// const fetchingForm = async () => {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_BASE}/myaccountphp.aspx`);
//     if (response.ok) {
//       const result = await response.text();
      
//       // Create a temporary div to parse the HTML
//       const tempDiv = document.createElement('div');
//       tempDiv.innerHTML = result;
      
//       // Extract all scripts from the response
//       const scripts = tempDiv.querySelectorAll('script');
      
//       // Create a container for the HTML (excluding scripts)
//       const container = document.createElement('div');
      
//       // Clone all non-script nodes
//       Array.from(tempDiv.childNodes).forEach(node => {
//         if (node.nodeName !== 'SCRIPT') {
//           container.appendChild(node.cloneNode(true));
//         }
//       });
      
//       // Set the HTML content (without scripts)
//       setLoginPanelHtml(container.innerHTML);
      
//       // Now handle script execution with corrected domain
//       scripts.forEach(script => {
//         const newScript = document.createElement('script');
        
//         // Fix script src to include your domain (qa.astroved.com)
//         if (script.src) {
//           if (script.src.startsWith('/')) {
//             newScript.src = `https://qa.astroved.com${script.src}`;
//           } else if (!script.src.startsWith('http')) {
//             newScript.src = `https://qa.astroved.com/${script.src}`;
//           } else {
//             newScript.src = script.src; // Keep full URLs as-is
//           }
//         } else {
//           newScript.textContent = script.textContent; // Inline scripts
//         }
        
//         // Copy all other attributes
//         Array.from(script.attributes).forEach(attr => {
//           newScript.setAttribute(attr.name, attr.value);
//         });
        
//         // Append to document head to execute
//         document.head.appendChild(newScript);
//       });
//     }
//   } catch (error) {
//     console.log("Error loading form:", error);
//   }
// };



  const handleCloseClick = (event) => {
    event.stopPropagation();

    // Close the overlay and remove the background
    setIsOverlayActive(false);
    setLoginPanelHtml(""); // Clear the HTML content (or you can leave it if you want to keep it for future use)
  };




  return (
    <>
      <section className="av-common-head">
        <div className="container">
          <div className="av-header-wrap">
            <div className="avmenu-toggle">
              <div className="av-header-menu avmenu">
                <div className="open-nav-menu">
                  <img
                    src="https://cdn.astroved.com/images/menu-icon.svg"
                    className="menu-icon"
                    width="20"
                    height="20"
                    alt="AstroVed Menu"
                    title="AstroVed"
                  />
                </div>
                <div className="avc-logo-mob avmob-logo">
                  <a href="/">
                    <img
                      className="avlogo-mob"
                      src="https://cdn.astroved.com/images/av-logo-white.svg"
                      width="130"
                      height="36"
                      alt="AstroVed"
                      title="AstroVed"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="av-header-left">
              <div className="av-logo-wrap">
                <a href="/">
                  <img
                    src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg"
                    width="216"
                    height="48"
                    alt="AstroVed"
                    title="AstroVed"
                  />
                </a>
              </div>
              <form onSubmit={handleSearch} className="av-search-wrap">
                <span className="av-search-icon">
                  <img
                    src="https://cdn.astroved.com/images/images-av/av-search.svg"
                    width="24"
                    height="24"
                    alt="search"
                  />
                </span>
                <input
                  type="text"
                  id="search-wrap"
                  placeholder="Search For Astrological Events"
                  onChange={handleInputChange}
                />
              </form>
              <div className="av-lang-wrap">
                <span>
                  {" "}
                  EN{" "}
                  <img
                    src="https://cdn.astroved.com/images/images-av/av-down-arrow.svg"
                    width="12"
                    height="7"
                    alt="language"
                  />
                </span>
                <div className="lang-wrap">
                  <ul>
                    <li className="lang-active">English - EN</li>
                    <li>
                      <a href="/hindi">हिंदी - HI</a>
                    </li>
                    <li>
                      <a href="/tamil">தமிழ் - TA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="av-header-right">
              <div id="mycart">
                <div className="av-cart-acc">
                  <div className="av-cart-wrap">
                    <div className="avc-order avc">
                      <a href="/shoppingcart.aspx">
                        <img src="https://cdn.astroved.com/images/images-av/av-shopping-cart.svg" alt="cartorder" width="24"height="24"/>
                        <span className="cart-txt">Cart</span>
                      </a>
                      <div id="cart_UpdateCart" className="top-cart">
                        <a href="/shoppingcart.aspx"></a>
                        <div>
                          <a href="/shoppingcart.aspx"></a>
                          <a
                            className="cart"
                            id="cart_lnkMyCart2"
                           
                            href="#!"
                          >
                            <span
                              id="cart_lbltotal"
                              style={{ display: "none" }}
                            >
                              ₹ 0
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="av-account-wrap">
                    <div className="top-signup">
                      <i className="fa fa-sign-in"></i>
                      <a id="signin" className="signup">
                        <span id="topnav" className="signup">
                          <span id="Label1">Sign Up</span>
                        </span>
                      </a>
                    </div>

                    <div className="av-account">
                      <div className="top-signin" onClick={handleSigninClick}>
                        <span id="A1" className="signin">
                          <span id="Span5" className="topnav top-signin">
                            <img
                              src="https://cdn.astroved.com/images/images-av/av-user.svg"
                              alt="sign in"
                              width="24"
                              height="24"
                              className="show-m"
                            />
                            <span id="Label4">
                              <div className="avc-order avs">
                                <div className="avc-order-in">
                                  <span className="acc-txt">Account</span>
                                </div>
                              </div>
                            </span>
                          </span>
                        </span>
                      </div>
                      <div className="signin-wrap" style={{ display: "none" }}>
                        <ul>
                          <li
                            className="top-signin"
                            onClick={handleSigninClick}
                          >
                            Sign In
                          </li>
                          <li>
                            <a href="/Register.aspx?ReturnUrl=Default.aspx">
                              Register
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSearch} className="av-mob-search-wrap">
            <span className="av-mobsearch-icon">
              <img
                src="https://cdn.astroved.com/images/images-av/av-search.svg"
                alt="search"
              />
            </span>
            <input
              type="text"
              id="search-wrap"
              placeholder="Search For Astrological Events"
              onChange={handleInputChange}
            />
          </form>
        </div>
      </section>

      {isOverlayActive && (
        <>
          <div
            id="overlayp"
            className={`overlayp panel ${
              isOverlayActive ? "overlayp panel active" : ""
            }`}
          >
            <button
              className="close"
              style={{ display: "block" }}
              onClick={handleCloseClick}
            >
              &times;
            </button>


              <div
              className="login-panel"
              dangerouslySetInnerHTML={{ __html: loginPanelHtml }}
            ></div>

            <div className="search-panel"></div>
          </div>
          <div
            className="panel-bg"
            style={{ display: isOverlayActive ? "block" : "none" }}
          ></div>
        </>
      )}
    </>
  );
}
