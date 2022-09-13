import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProgressBars from "../components/ProgressBars";
import Layout from "../containers/Layout";
import useProgress from "../hooks/useProgress";
import { getUser } from "../utils/getUser";

const Shared = () => {
  const { uid } = useParams();
  const [user, setUser] = useState(false);
  const { progress } = useProgress(user?.dateFrom);

  useEffect(() => {
    getUser(uid).then((userRes) => {
      setUser(userRes);
    });
  }, [uid]);

  return (
    <div>
      <Layout>
        <h2>Hola..., mirá cuanto tiempo llevo sin beber alcohol!</h2>
        {progress && <ProgressBars data={progress.filter((time) => time[0] !== "seconds").filter((time) => time[0] !== "minutes")} />}
      </Layout>
    </div>
  );
};

export default Shared;
