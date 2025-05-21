

"use client";
import React, { useState, useEffect } from "react";

export default function HelloBar() {
  const [helloBar,setHelloBar]=useState([])
  const [currentIndex, setCurrentIndex] = useState(0); // Default to 0, assuming there's at least one item

 
  useEffect(() => {
    fetchHelloBar()
    if (helloBar.length > 1) {
      const randomIndex = Math.floor(Math.random() * helloBar.length);
      setCurrentIndex(randomIndex);
    }
  }, [helloBar.length]); 
  const fetchHelloBar=async()=>{
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_POPUP_HELLOBAR);
     
      if (response.ok) {
        const data = await response.json();
        setHelloBar(data.hellobar_details)

        
      } else {
        const errorData = await response.json();
        error = errorData.status;
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: helloBar[currentIndex]?.description }} />
     
    </>
  );
}


