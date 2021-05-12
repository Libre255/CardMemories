import axios from "axios";
import { CardsAPI } from "./CardsAPI";

const getCards = async (): Promise<CardsAPI[]> => {
  const response = await axios("/cards");
  const cardsArray = response.data;
  return cardsArray;
};

export { getCards };
