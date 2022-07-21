import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PersonalInfo from "../pages/PersonalInfo";
import Comunity from "../pages/Comunity";
import Progress from "../pages/Progress";
import "../styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal-info" element={<PersonalInfo />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/comunity" element={<Comunity />} />
    </Routes>
  );
}

export default App;
