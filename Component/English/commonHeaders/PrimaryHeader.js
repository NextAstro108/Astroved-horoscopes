


"use client"
import React, { useState } from "react";
import { CURRENT_CONFIG} from "@/Component/Config/Config";



export default function PrimaryHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form behavior
    if (searchQuery.trim()) {
      // Redirect to search results page with query
      window.location.href = `${CURRENT_CONFIG.names.web_base}/search?q=${encodeURIComponent(searchQuery)}`;
    }
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
              <form onSubmit={handleSearch}  className="av-search-wrap">
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
            </div>
          </div>
          <form onSubmit={handleSearch}  className="av-mob-search-wrap">
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
    </>
  );
}
