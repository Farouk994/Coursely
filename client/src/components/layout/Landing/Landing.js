import React from "react";
import "./Landing.css";
import SearchSchool from "../School/SearchSchool";

const Landing = () => {
   return (
      <div>
         <section className="landing">
            <div className="dark-overlay">
               <div className="landing-inner">
                  <SearchSchool />
               </div>
            </div>
         </section>
      </div>
   );
};

export default Landing;
