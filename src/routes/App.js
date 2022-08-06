import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Home from "../pages/Home";
import PersonalInfo from "../pages/PersonalInfo";
import Comunity from "../pages/Comunity";
import Progress from "../pages/Progress";
import "../styles/App.css";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/" element={<Home />} />
        </>
      ) : (
        <>
          {!user?.dateFrom ? (
            <Route path="/" element={<PersonalInfo />} />
          ) : (
            <>
              <Route path="/" element={<Progress />} />
              <Route path="/comunity" element={<Comunity />} />
            </>
          )}
        </>
      )}
    </Routes>
  );
}

export default App;
