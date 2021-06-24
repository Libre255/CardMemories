import { useEffect, useState } from "react";
import { CardsAPI } from "../service/cards/CardsAPI";

export interface userInfoType {
  score: number;
  name: string;
}
interface Props {
  selectedCards: CardsAPI[];
}

const useUserInfo = ({ selectedCards }: Props) => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    score: 0,
    name: "",
  });

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
