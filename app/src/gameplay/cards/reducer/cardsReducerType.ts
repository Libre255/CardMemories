import { CardsAPI } from "../../../service/cards/CardsAPI";

export interface Commands {
  Add_to_DB_Deck: string;
  Add_Cards_To_Deck: string;
  Flipp_Card_UP: string;
  Reset_DeckOfCards: string;
  Update_Amount_of_ParCards: string;
  Flip_Selected_Cards_Down: string;
  Flip_AllCards_Up: string;
  Flip_AllCards_Down: string;
}
export interface InitialStateType {
  cardDeck: CardsAPI[];
  CompleteDBDeck: CardsAPI[];
  amountOfParCards: number;
}

export interface Action {
  type: string;
  cardsFromDB?: CardsAPI[];
  cardSelected?: CardsAPI;
  selectedCards?: CardsAPI[];
}
