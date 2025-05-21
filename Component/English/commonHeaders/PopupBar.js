


"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const PopupBar = () => {
  const [popupBar, setPopupBar] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchHelloBar();
  }, []);

  useEffect(() => {
    if (popupBar.length > 0) {
      const eventpopstatus = Cookies.get("eventpopup");

      if (!eventpopstatus) {
        const randomIndex = Math.floor(Math.random() * popupBar.length);
        setCurrentIndex(randomIndex);
        setShowPopup(true);

        const timer = setTimeout(() => {
          const cookieWrapper = document.querySelector(".wk-cookie-wrapper");
          if (cookieWrapper) {
            cookieWrapper.classList.add("cookie-visible");
            const closeButton = cookieWrapper.querySelector(".wk-cookie-close");
            closeButton.addEventListener("click", () => {
              cookieWrapper.classList.remove("cookie-visible");
              Cookies.set("eventpopup", "allowed", { expires: 1 });
              setShowPopup(false);
            });
          }
        }, 10000);

        return () => clearTimeout(timer);
      }
    }
  }, [popupBar]);

  const fetchHelloBar = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_POPUP_HELLOBAR);
      if (response.ok) {
        const data = await response.json();
        setPopupBar(data.popup_details);
      } else {
        const errorData = await response.json();
        console.error("Error fetching data:", errorData.status);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <>
      {showPopup && popupBar[currentIndex] && (
        <div
          dangerouslySetInnerHTML={{ __html: popupBar[currentIndex]?.description }}
        />
      )}
    </>
  );
};

export default PopupBar;

