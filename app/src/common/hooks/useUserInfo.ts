import { format } from "date-fns";
import { useEffect, useState } from "react";
import { CardsAPI } from "../../service/cards/CardsAPI";

export interface userInfoType {
  score: number;
  name: string;
  date: string;
  time:number;
}
interface Props {
  selectedCards: CardsAPI[];
  timer:number
}

const useUserInfo = ({ selectedCards, timer }: Props) => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    score: 0,
    name: "",
    date: format(new Date(), "yyyy-MM-dd"),
    time:0
  });

  useEffect(() => {
    setUserInfo(pv => ({...pv, time:timer}))
  }, [timer])

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
