import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import SideBar from "./Components/Pages/SideBar/SideBar";
import Patient from "./Components/Pages/Patient/Patient";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route path="/createAccount" element={<SignUp/>} />
        </Routes>
      </Router> */}
      {/* <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/patient" element={<Patient />} />
          </Routes>
        </SideBar>
      </BrowserRouter> */}
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}

          <Route exact path="/" element={<Patient />} />
          {/* <Route path="/createAccount" element={<SignUp />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
