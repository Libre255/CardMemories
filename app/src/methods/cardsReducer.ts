import {
  addCardsToDeck,
  addToCompleteDBDeck,
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
    default:
      return state;
  }
};

export { COMMANDS, initialState, reducer };
/*
 const updateAmountOfCards = () => ({
    ...state,
    amountOfParCards: state.amountOfParCards + 2,
  });
  const addToCompleteDBDeck = () => ({
    ...state,
    CompleteDBDeck: action.cardsFromDB ?? [],
  });
  const flipCardUP = () => {
    const flippedOneCard = state.cardDeck.map((card) => {
      if (card.id === action.cardSelected?.id) card.flippCard = true;
      return card;
    });
    console.log("flipcardUp ", state);
    return { ...state, cardDeck: flippedOneCard };
  };
  const flipSelectedCardsDown = () => {
    const flipBackDown = state.cardDeck.map((card) => {
      if (
        action.selectedCards?.some(
          (selectedCard) => selectedCard.id === card.id
        )
      ) {
        card.flippCard = false;
      }
      return card;
    });
    return { ...state, cardDeck: flipBackDown };
  };
  const addCardsToDeck = () => {
    let deck: CardsAPI[] = [];
    for (let i = 0; i < state.amountOfParCards; i++) {
      deck = [...deck, { ...state.CompleteDBDeck[i] }];
    }
    const tea = { ...state, cardDeck: deck };
    console.log("tea", tea);
    return tea;
  };
*/
