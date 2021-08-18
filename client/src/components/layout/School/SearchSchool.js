import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchSchool = () => {
   const [formData, setFormData] = useState({
      school: "",
      city: "",
      students: "",
   });

   return (
      <div>
         <ul class="nav1">
            <li id="settings"></li>
            <li id="search">
               <form action="" method="get">
                  <input
                     type="text"
                     name="search_text"
                     id="search_text"
                     placeholder="Search"
                  />
                  <input
                     type="button"
                     name="search_button"
                     id="search_button"
                  />
               </form>
            </li>
            <li id="options">
               <Link to="#">Search</Link>
               <ul class="subnav">
                  <li>
                     <Link to="/getschool">Pokemon High</Link>
                  </li>
                  <li>
                     <Link to="#">St Peters High</Link>
                  </li>
                  <li>
                     <Link to="/school">All schools</Link>
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   );
};

export default SearchSchool;
