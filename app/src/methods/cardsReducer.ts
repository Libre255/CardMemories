import {
  addCardsToDeck,
  addToCompleteDBDeck,
  flipAllCardsDown,
  flipAllCardsUp,
  flipCardUP,
  flipSelectedCardsDown,
  updateAmountOfCards,
} from "./cardsReducerFunctions";
import { Action, Commands, InitialStateType } from "./cardsReducerType";

const COMMANDS: Commands = {
  Add_Cards_To_Deck: "add more cards to cardDeck",
  Add_to_DB_Deck: "add cards to FullCardDeck",
  Update_Amount_of_ParCards:
    "add more par cards by increasing amount of par cards",
  Flipp_Card_UP: "flipp clicked card up",
  Reset_DeckOfCards: "reset cardDeck",
  Flip_Selected_Cards_Down: "flip selected cards down because they didnt match",
  Flip_AllCards_Up: "flipp all cards up when smashBar is filled",
  Flip_AllCards_Down:"Flipp all cards down after 1second"
};
const initialState: InitialStateType = {
  cardDeck: [],
  CompleteDBDeck: [],
  amountOfParCards: 2,
};

const reducer = (state: InitialStateType, action: Action) => {
  switch (action.type) {
    case COMMANDS.Add_Cards_To_Deck:
      return addCardsToDeck(state);
    case COMMANDS.Add_to_DB_Deck:
      return addToCompleteDBDeck(state, action);
    case COMMANDS.Update_Amount_of_ParCards:
      return updateAmountOfCards(state);
    case COMMANDS.Flipp_Card_UP:
      return flipCardUP(state, action);
    case COMMANDS.Flip_Selected_Cards_Down:
      return flipSelectedCardsDown(state, action);
    case COMMANDS.Flip_AllCards_Up:
      return flipAllCardsUp(state);
    case COMMANDS.Flip_AllCards_Down:
      return flipAllCardsDown(state);
    default:
      return state;
  }
};

export { COMMANDS, initialState, reducer };
