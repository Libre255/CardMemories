import { CardsAPI } from "../service/cards/CardsAPI";
import { Action, InitialStateType } from "./cardsReducerType";

const updateAmountOfCards = (state: InitialStateType) => ({
  ...state,
  amountOfParCards: state.amountOfParCards + 2,
});

const addToCompleteDBDeck = (state: InitialStateType, action: Action) => ({
  ...state,
  CompleteDBDeck: action.cardsFromDB ?? [],
});

const flipCardUP = (state: InitialStateType, action: Action) => {
  const flippedOneCard = state.cardDeck.map((card) => {
    if (card.id === action.cardSelected?.id) card.flippCard = true;
    return card;
  });
  console.log("flipcardUp ", state);
  return { ...state, cardDeck: flippedOneCard };
};

const flipSelectedCardsDown = (state: InitialStateType, action: Action) => {
  const flipBackDown = state.cardDeck.map((card) => {
    if (
      action.selectedCards?.some((selectedCard) => selectedCard.id === card.id)
    ) {
      card.flippCard = false;
    }
    return card;
  });
  return { ...state, cardDeck: flipBackDown };
};

const addCardsToDeck = (state: InitialStateType) => {
  let deck: CardsAPI[] = [];
  for (let i = 0; i < state.amountOfParCards; i++) {
    deck = [...deck, { ...state.CompleteDBDeck[i] }];
  }
  const tea = { ...state, cardDeck: deck };
  console.log("tea", tea);
  return tea;
};

const flipAllCardsUp = (state: InitialStateType) => {
  const allCardsFlippedUP = state.cardDeck.map((card) => {
    card.flippCard = true;
    return card;
  });
  return { ...state, cardDeck: allCardsFlippedUP };
};

export {
  addCardsToDeck,
  flipSelectedCardsDown,
  flipCardUP,
  addToCompleteDBDeck,
  updateAmountOfCards,
  flipAllCardsUp,
};
