import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Home from "../pages/Home";
import PersonalInfo from "../pages/PersonalInfo";
import "../styles/App.css";
import Progress from "../pages/Progress";
import NoPage from "../pages/NoPage";
import Help from "../pages/Help";
import References from "../pages/References";
import Shared from "../pages/Shared";
import HelpAssets from "../pages/HelpAssets";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/*" element={<Home />} />
        </>
      ) : (
        <>
          {!user?.dateFrom ? (
            <Route path="/" element={<PersonalInfo />} />
          ) : (
            <>
              <Route path="/" element={<Progress />} />
              <Route path="/comunity" element={<NoPage />} />
              <Route path="/sponsorship" element={<NoPage />} />
              <Route path="/help" element={<Help />} />
              <Route path="/help/:id" element={<HelpAssets />} />
              <Route path="/references" element={<References />} />
            </>
          )}
        </>
      )}
      <Route path="/shared/:uid" element={<Shared />} />
    </Routes>
  );
}

export default App;
