import { useEffect, useState } from "react";
import moment from "moment";

export default function useProgress(initialValue) {
  const [progress, setProgress] = useState(false);
  const [actualDate, setActualDate] = useState(moment().format("YYYY-MM-DD HH:mm:ss"));

  const refreshActualDate = () => {
    const newDate = moment().format("YYYY-MM-DD HH:mm:ss");
    setActualDate(newDate);
  };

  useEffect(() => {
    if (initialValue) {
      const oldDate = moment(initialValue);
      const diff = moment(actualDate).diff(oldDate);
      const formatedDiff = moment.duration(diff)._data;
      delete formatedDiff.milliseconds;
      setProgress(formatedDiff);
    }
  }, [initialValue, actualDate]);

  useEffect(() => {
    const interval = setInterval(refreshActualDate, 1000);
    return () => clearInterval(interval);
  }, []);

  return { progress };
}
