/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CardTimer = ({ deadline }) => {
  const targetDatetime = deadline;
  const now = new Date();

  const targetDate = new Date(targetDatetime);

  const isTargetDatePassed = targetDate < now;

  const givenDate = new Date(deadline);
  const currentDate = new Date();

  const [timeDifference, setTimeDifference] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeDifference = () => {
      const difference = Math.abs(currentDate - givenDate) / 1000; // Difference in seconds

      const days = Math.floor(difference / (24 * 60 * 60));
      const hours = Math.floor((difference % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((difference % (60 * 60)) / 60);
      const seconds = Math.floor(difference % 60);

      setTimeDifference({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeDifference, 1000);

    return () => clearInterval(timer);
  }, [currentDate, givenDate]);
  return (
    <div className="CardTimer">
      {isTargetDatePassed ? (
        <h5> Expired</h5>
      ) : (
        <div className="card_info_end_box">
          <div className="card_info_end_num">
            <div className="card_info_end_num_h">{timeDifference.days}</div>
            <div className="card_info_end_num_p">KUN</div>
          </div>
          <div className="card_info_end_num">
            <div className="card_info_end_num_h">{timeDifference.hours}</div>
            <div className="card_info_end_num_p">SOAT</div>
          </div>
          <div className="card_info_end_num">
            <div className="card_info_end_num_h">{timeDifference.minutes}</div>
            <div className="card_info_end_num_p">DAQIQA</div>
          </div>
          <div className="card_info_end_num">
            <div className="card_info_end_num_h">{timeDifference.seconds}</div>
            <div className="card_info_end_num_p">SONIYA</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardTimer;
