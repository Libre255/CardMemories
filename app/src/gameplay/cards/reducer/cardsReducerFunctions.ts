import { CardsAPI } from "../../../service/cards/CardsAPI";
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
  const addedNewCards = { ...state, cardDeck: deck };
  console.log("Added New Cards:", addedNewCards);
  return addedNewCards;
};

const flipAllCardsUp = (state: InitialStateType) => {
  const allCardsFlippedUP = state.cardDeck.map((card) => {
    card.smashCard = true;
    return card;
  });
  return { ...state, cardDeck: allCardsFlippedUP };
};

const flipAllCardsDown = (state: InitialStateType) => {
  const allCardsFlippedDOWN = state.cardDeck.map((card) => {
    card.smashCard = false;
    return card;
  });
  return { ...state, cardDeck: allCardsFlippedDOWN };
};

export {
  addCardsToDeck,
  flipSelectedCardsDown,
  flipCardUP,
  addToCompleteDBDeck,
  updateAmountOfCards,
  flipAllCardsUp,
  flipAllCardsDown,
};
