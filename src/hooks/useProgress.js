import { useEffect, useState } from "react";
import moment from "moment";

export default function useProgress(initialValue) {
  const [progress, setProgress] = useState(false);
  const [actualDate, setActualDate] = useState(moment().format("YYYY-MM-DD HH:mm:ss"));

  const refreshActualDate = () => {
    setActualDate(moment().format("DD-MM-YYYY hh:mm:ss"));
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

  return { progress };
}
