import { useEffect, useState } from "react";
import { CardsAPI } from "../service/cards/CardsAPI";

export interface userInfoType {
  InsertUserName: boolean;
  score: number;
  name: string;
}
interface Props {
  timerReached0: boolean;
  selectedCards: CardsAPI[];
}

const useUserInfo = ({ timerReached0, selectedCards }: Props) => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    InsertUserName: false,
    score: 0,
    name: "",
  });

  useEffect(() => {
    if (timerReached0) {
      setUserInfo((pv) => ({ ...pv, InsertUserName: true }));
    }
  }, [timerReached0]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (selectedCards[0].value === selectedCards[1].value) {
        setUserInfo((pv) => ({ ...pv, score: pv.score + 1 }));
      }
    }
  }, [selectedCards]);

  return { userInfo, setUserInfo };
};

export { useUserInfo };
