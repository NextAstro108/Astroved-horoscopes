



"use client"
import React from 'react';
import Link from 'next/link';
// import { CURRENT_CONFIG} from "@/Component/Config/Config";

// Ensure that menuItems is an array by default
const SecondaryHeader = ({ menuItems = [] }) => {
  
  
  return (
    <div className="av-header-menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-main">
              <div className="menu-overlay"></div>

              {/* Navigation menu start */}
              <nav className="nav-menu">
                <div className="close-nav-menu">
                  <img
                    src="https://cdn.astroved.com/images/menu-close.png"
                    alt="Close"
                    width="16"
                    height="16"
                    title="Close"
                  />
                </div>

                <ul className="menu">
                  {Array.isArray(menuItems) && menuItems.map((menu,index) => {
                    const hasSubMenu = menu.sub && menu.sub.length > 0;
               
                    const generateUrl = (name) => {
 
                      return `${process.env.NEXT_PUBLIC_WEB_BASE}${name.replace(`${process.env.NEXT_PUBLIC_WEB_BASE}`, '')}`;
                    };
                    
                    return (
                      <li
                        key={`menu-${menu.id || index}`}
                        className={`menu-item ${hasSubMenu ? 'menu-item-has-children' : ''}`}
                      >
                        <a
                          className="main-menu-item"
                          {...(hasSubMenu && { 'data-toggle': 'sub-menu' })}
                         href={generateUrl(menu.link)}
                         
                        >
                          {menu.name}
                        </a>

                        {hasSubMenu && (
                          <ul className="sub-menu">
                            {menu.sub.map((submenu,subIndex) => {
                              const hasSubSubMenu = submenu.sub && submenu.sub.length > 0;

                              return (
                                <li
                                key={`submenu-${submenu.id || subIndex}`} 
                                  className={`menu-item ${hasSubSubMenu ? 'menu-item-has-children dropdown-submenu' : ''}`}
                                >
                                  <Link className="sub-menu-item" href={generateUrl(submenu.link)}>
                                    {submenu.name}
                                  </Link>

                                  {hasSubSubMenu && (
                                    <ul className="sub-menu dropdown-menu">
                                      {submenu.sub.map((sub,subSubIndex) => (
                                        <li  key={`subsubmenu-${sub.id || subSubIndex}`} className="menu-item">
                                          <Link href={generateUrl(sub.link)}>{sub.name}</Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;


