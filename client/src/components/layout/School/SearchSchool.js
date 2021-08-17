/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchSchool = () => {
   const [formData, setFormData] = useState({
      search: "",
   });

   const { search } = formData;

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = async (e) => {
      e.preventDefault();

      const newUser = {
         search,
      };
      try {
         const body = JSON.stringify(newUser);
         const res = await axios.post("api/schools", body);
         console.log(res.data);
      } catch (err) {
         console.log(err.response.data);
      }
   };

   return (
      <div>
         <ul class="nav1">
            <li id="settings"></li>
            <li id="search">
               <form action="" method="get">
                  <input
                     type="text"
                     name="search_text"
                     placeholder="Search School"
                  />
                  <button
                     type="button"
                     name="search_button"
                     id="search_button"
                  />
               </form>
            </li>
            <li id="options">
               <a href="/">Schools</a>
               <ul class="subnav">
                  <li>
                     <a href="/"></a>
                  </li>
                  <li>
                     <a href="/"></a>
                  </li>
                  <li>
                     <a href="/"></a>
                  </li>
                  <li>
                     <Link to="/school" style={{ color: "red" }}>
                        View all schools
                     </Link>
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   );
};

export default SearchSchool;
