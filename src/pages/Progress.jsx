import React, { useState, useEffect } from "react";
import NavigationLayout from "../containers/NavigationLayout";
import ProgressBars from "../components/ProgressBars";
import useProgress from "../hooks/useProgress";
import "../styles/Progress.css";
import Layout from "../containers/Layout";
import restartImage from "../assets/images/Restart.png";

const initialDate = "2022-06-16T08:38:28";

const Progress = () => {
  const { progress } = useProgress(initialDate);
  // console.log(actualDate);

  // function refreshClock() {
  //   const days = ((actualDate - initialDate) / 1000 / 60 / 60 / 24).toFixed(0);
  //   const hours = (((actualDate - initialDate) / 1000 / 60 / 60) % 24).toFixed(0);
  //   const minutes = (((actualDate - initialDate) / 1000 / 60) % 60).toFixed(0);
  //   const seconds = (((actualDate - initialDate) / 1000) % 60).toFixed(0);
  //   console.log(days);
  //   console.log(hours);
  //   console.log(minutes);
  //   console.log(seconds);
  //   setActualDate(new Date().getTime());
  // }

  // useEffect(() => {
  //   const timerId = setInterval(refreshClock, 1000);

  //   return function cleanup() {
  //     clearInterval(timerId);
  //   };
  // }, []);

  return (
    <Layout>
      <NavigationLayout>
        <div className="Progress">
          <div className="Progress_header">
            <p>Felicitaciones Joan</p>
            <p>Has estado libre de alcohol</p>
          </div>
          <ProgressBars data={progress} />
          <div className="Progress_footer">
            <button type="button" className="Progress_btn_restart">
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
