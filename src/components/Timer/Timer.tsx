import { FunctionComponent, useState, useEffect, useCallback } from "react";

type TimerProps = {
  deadline: Date;
};

export const Timer: FunctionComponent<TimerProps> = ({ deadline }) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const getTime = useCallback(() => {
    const time = deadline.getTime() - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }, [deadline]);

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [getTime]);

  return (
    <div>
      <div>Days: {days}</div>
      <div>Hours: {hours}</div>
      <div>Minutes: {minutes}</div>
      <div>Seconds: {seconds}</div>
    </div>
  );
};
