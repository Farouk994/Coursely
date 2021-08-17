import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing/Landing";

function App() {
   return (
      <div>
         <Router>
            <Navbar />
            <Route exact to="/" component={Landing} />
         </Router>
      </div>
   );
}

export default App;
