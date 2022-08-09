import React, { useContext } from "react";
import NavigationLayout from "../containers/NavigationLayout";
import ProgressBars from "../components/ProgressBars";
import useProgress from "../hooks/useProgress";
import Layout from "../containers/Layout";
import restartImage from "../assets/images/Restart.png";
import { UserContext } from "../context/UserContext";
import moment from "moment";
import "../styles/Progress.css";
import { restartGiveUpDatePopUp } from "../utils/popUps";
import { restartGiveUpDate } from "../utils/restartGiveUpDate";

const Progress = () => {
  const { user, setUser } = useContext(UserContext);
  const { progress } = useProgress(user?.dateFrom);

  const handleRestartGiveUpDate = () => {
    restartGiveUpDatePopUp().then((answer) => {
      if (answer) {
        const newUser = { ...user, dateFrom: moment().format("YYYY-MM-DD HH:mm:ss") };
        if (user?.credentials?.isAnonymous) {
          localStorage.setItem("user", JSON.stringify(newUser));
          setUser(newUser);
        } else {
          restartGiveUpDate(newUser).then((res) => {
            res && setUser((prevData) => ({ ...prevData, ...newUser }));
          });
        }
      }
    });
  };

  return (
    <Layout>
      <NavigationLayout>
        <div className="Progress">
          <div className="Progress_header">
            <p>Felicitaciones {user?.name}</p>
            <p>Has estado libre de alcohol</p>
          </div>
          <ProgressBars data={progress} />
          <div className="Progress_footer">
            <button type="button" className="Progress_btn_restart" onClick={handleRestartGiveUpDate}>
              <img src={restartImage} alt="Reiniciar" />
              Reiniciar el contador
            </button>
            <a href="https://aa.org.ar/informacion-primaria/informacion-general/los-doce-pasos/">
              <p>Ver los 12 pasos para superar la adiccion</p>
              <p>Alcoholicos Anonimos</p>
            </a>
          </div>
        </div>
      </NavigationLayout>
    </Layout>
  );
};

export default Progress;
