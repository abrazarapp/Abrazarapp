import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Brand from "../components/Brand";
import { UserContext } from "../context/UserContext";
import "../styles/PersonalInfo.css";
import { requiredFieldsError } from "../utils/popUps";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [dateFrom, setDateFrom] = useState("");

  const inputReason = useRef(null);
  const inputName = useRef(null);

  const handleChangeReason = () => {
    setReason(inputReason.current.value);
  };

  useEffect(() => {
    setDateFrom(toDateInputValue(new Date()));
  }, []);

  const toDateInputValue = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear().toString();
    const month = (dateObj.getMonth() + 1).toString();
    const day = dateObj.getDate().toString();
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChangeName = () => {
    setName(inputName.current.value);
  };

  const handleContinue = () => {
    if (name && reason && dateFrom) {
      const newUser = { name, reason, dateFrom };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/progress");
    } else {
      requiredFieldsError();
    }
  };

  return (
    <div className="PersonalInfo">
      <div className="PersonalInfo_welcome">
        <h2>Empecemos</h2>
      </div>
      <div className="PersonalInfo_content">
        <div>
          <h3>Alias o nombre:</h3>
          <input type="text" value={name} onChange={handleChangeName} ref={inputName} />
        </div>
        <div>
          <h3>Quiero mantenerme sobrio porque...</h3>
          <textarea
            maxLength="255"
            placeholder="Intenta describir algo que puedas sentir. Esto puede ser positivo o negativo, lo que sea mas poderoso."
            value={reason}
            onChange={handleChangeReason}
            ref={inputReason}
            cols="30"
          />
        </div>
        <div>
          <h3>Me mantengo sobrio desde:</h3>
          <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
        </div>
        <button type="button" onClick={handleContinue}>
          Siguiente
        </button>
        <div className="Home_brand">
          <Brand />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
