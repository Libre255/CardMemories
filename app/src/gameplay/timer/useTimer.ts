import { useEffect, useState } from "react";

const useTimer = () => {
  const [timerReached0, setTimerReached0] = useState<boolean>(false);
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);

    if (timer === 0) {
      setTimerReached0(true);
    }
  }, [timer]);

  return { timer, timerReached0 };
};

export { useTimer };
