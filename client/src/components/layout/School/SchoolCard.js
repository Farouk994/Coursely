import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./School.css";

const SchoolCard = () => {
   const [schools, setSchool] = useState([]);

   useEffect(() => {
      async function fetchData() {
         await axios
            .get("http://localhost:8080/api/school/all")
            .then((res) => {
               setSchool(res.data);
            })
            .catch((err) => {
               console.log(err);
            });
      }
      fetchData();
   }, []);

   return (
      <div>
         {schools.map((school, index) => {
            return (
               <>
                  <br></br>
                  <div className="card">
                     <ul className="box lead" key={index}>
                        <li>
                           <h2>{school.name}</h2>
                        </li>
                        <li>
                           <span>Description:</span>
                           <strong>{school.description}</strong>
                        </li>
                        <li>
                           Location: <strong>{school.location}</strong>
                        </li>
                        <li>Students</li>
                     </ul>
                     <div>
                        <a href="/login">
                           <button
                              className="btn save"
                              // onclick="this.blur()"
                              style={{ color: "limegreen" }}
                           >
                              <Link to="/getschool">
                                 Get Report
                              </Link>
                           </button>
                        </a>
                        <a href="/register">
                           <button
                              className="btn delete"
                              style={{ color: "crimson" }}
                           >
                              X
                           </button>
                        </a>
                     </div>
                  </div>
                  <br></br>
               </>
            );
         })}
      </div>
   );
};

export default SchoolCard;
