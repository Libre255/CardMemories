import { useEffect, useState } from "react";

const useTimer = () => {
  const [maxMatchedCardsReached, setMaxMatchedCardsReached] = useState<boolean>(
    false
  );
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);

    if (timer === 0) {
      setMaxMatchedCardsReached(true);
    }
  }, [timer]);

  return { timer, maxMatchedCardsReached };
};

export { useTimer };
