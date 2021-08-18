import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
// ES2015 module syntax
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import "./School.css";

const GetSchool = () => {
   const [school, setSchool] = useState({ school: "" });
   const [student, setStudent] = useState([]);

   const pdfExportComponent = useRef(null);

   const handleExportWithComponent = (event) => {
      pdfExportComponent.current.save();
   };
   useEffect(() => {
      async function fetchData() {
         await axios
            .get("http://localhost:8080/api/school/611ad68949a38dc5ccbe11dc")
            .then((res) => {
               setSchool(res.data.school);
               setStudent(res.data.school.students);
               //    console.log(student);
            })
            .catch((err) => {
               console.log(err);
            });
      }
      fetchData();
      //   console.log(school)
   }, []);

   return (
      <div className="container">
         <br></br>
         <PDFExport ref={pdfExportComponent} paperSize="A4">
            <div className="card">
               <ul className="box lead">
                  <li>
                     Name:<h2>{school.name}</h2>
                  </li>
                  <li>
                     <span>Description:</span>
                     <strong>{school.description}</strong>
                  </li>
                  <li>
                     Location: <strong>{school.location}</strong>
                  </li>
                  <br></br>
                  <div>
                     <div>
                        <h4>Course List</h4>
                        <table border={1} cellPadding={5}>
                           <thead>
                              <tr>
                                 <th>Name</th>
                                 <th>Course</th>
                                 <th>Grade</th>
                                 <th>City</th>
                              </tr>
                           </thead>
                           <tbody>
                              {student.map((student, index) => (
                                 <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.course[0].subject}</td>
                                    <td>{student.course[0].grade}</td>
                                    <td>{student.city}</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                        <br></br>
                     </div>
                  </div>
               </ul>
            </div>
            <br></br>
         </PDFExport>
         <button
            className="btn btn-primary"
            onClick={handleExportWithComponent}
         >
            Download Report
         </button>
      </div>
   );
};

export default GetSchool;
