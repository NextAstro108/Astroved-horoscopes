







import React from "react";
import SecondaryHeader from "./SecondaryHeader";



// Server Component for fetching data
const MenuHeaderJson = async () => {
  let menuItems = null;
  let error = null;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_BASE}/mainmenu.json`);
    if (response.ok) {
        menuItems = await response.json();
       
    } else {
      const errorData = await response.json();
      error = errorData.status;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }

  

  return (
<>
     <SecondaryHeader menuItems={menuItems}  />

     </>
  );
};

 export default MenuHeaderJson;
      
           

