import React, { useState, useEffect } from "react";
import "./Countdown.scss";

const Countdown = ({onHideCountdown}) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const startCountdown = () => {
    let interval = setInterval(() => {
      const endDate = new Date("Dec 31, 2022");
      const currentDate = new Date();
      const totalSeconds = (endDate - currentDate) / 1000;

      const daysCount = Math.floor(totalSeconds / 3600 / 24);
      const hoursCount = Math.floor(totalSeconds / 3600) % 24;
      const minutesCount = Math.floor(totalSeconds / 60) % 60;
      const secondsCount = Math.floor(totalSeconds) % 60;
      if (totalSeconds < 1) {
        setCountdownEnded(true);
        clearInterval(interval);
      } else {
        setDays(`${format(daysCount)}`);
        setHours(`${format(hoursCount)}`);
        setMinutes(`${format(minutesCount)}`);
        setSeconds(`${format(secondsCount)}`);
      }
    }, 1000);
  };

  function format(t) {
    return t < 10 ? `0${t}` : t;
  }

  useEffect(() => {
    startCountdown();
  }, []);

  // useState for Close Countdown Button
  const [countdownEnded, setCountdownEnded] = useState(false);

  return (
    <div className="countdown-section">
      <div className="container">
        <h2 className="--text-md">
          {!countdownEnded ? "Amazone Sale..!" : "Sale Ended..!!"}
        </h2>
        <div className="countdown --card --my">
          <time className="--flex-center --text-center --color-white">
            <span>
              <p>{days}</p>
              <small>Days</small>
            </span>
            <span>
              <p>{hours}</p>
              <small>Hours</small>
            </span>
            <span>
              <p>{minutes}</p>
              <small>Minutes</small>
            </span>
            <span>
              <p>{seconds}</p>
              <small>Seconds</small>
            </span>
          </time>
        </div>
      </div>

      <p className="close" onClick={onHideCountdown}>
        X
      </p>
    </div>
  );
};

export default Countdown;
