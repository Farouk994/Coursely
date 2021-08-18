import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing/Landing";
import Schools from "./components/layout/School/Schools";
import GetSchool from "./components/layout/School/SchoolById";
// import SchoolReport from "./components/layout/School/SchoolReport";

function App() {
   return (
      <Router>
         <Navbar />
         <Route exact path="/" component={Landing} />
         <Route exact path="/school" component={Schools} />
         <Route exact path="/getschool" component={GetSchool} />
         {/* <Route exact path="/schoolreport" component={SchoolReport} /> */}
      </Router>
   );
}

export default App;
