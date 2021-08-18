import React, { useState, useEffect } from "react";
import axios from "axios";
import "./School.css";
import GetSchoolInfo from "./showAllData";

const SchoolCard = () => {
   const [schools, setSchool] = useState([]);
   const [displaySchool, toggleSchool] = useState(false);

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
                        <div className="my-2">
                           <button
                              onClick={() => toggleSchool(!displaySchool)}
                              type="button"
                              className="btn btn-warning"
                           >
                              Get Report
                           </button>
                        </div>
                        {displaySchool && <GetSchoolInfo />}
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
