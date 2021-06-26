import { useEffect, useReducer, useState } from "react";
import { COMMANDS, initialState, reducer } from "../methods/cardsReducer";
import { getCards } from "../service/cards/CardsService";

const useCards = () => {
  const [{ cardDeck }, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardsArray = await getCards();
        if (!cardsArray) {
          throw new Error("cardsArray is undefined");
        }
        dispatch({ type: COMMANDS.Add_to_DB_Deck, cardsFromDB: cardsArray });
        dispatch({ type: COMMANDS.Add_Cards_To_Deck });
        console.log("fetched Cars :D!");
      } catch (error) {
        setError(error);
      }
    };
    fetchCards();
  }, [dispatch]);

  useEffect(() => {
    const addMoreCardsToDeck = () => {
      const waitForAnimationToFlipDown = () => {
        dispatch({ type: COMMANDS.Update_Amount_of_ParCards });
        dispatch({ type: COMMANDS.Add_Cards_To_Deck });
      };
      setTimeout(waitForAnimationToFlipDown, 1050);
    };

    const cardDeckHasBeenFilled = cardDeck.length > 1;
    const thereIsMoreCardsOnDeck = cardDeck.length < 10;
    const foundAllMatchedCards = cardDeck.every(
      (card) => card.flippCard === true
    );

    if (
      foundAllMatchedCards &&
      cardDeckHasBeenFilled &&
      thereIsMoreCardsOnDeck
    ) {
      addMoreCardsToDeck();
      console.log("all cards Flipped! :D");
    }
  }, [cardDeck, dispatch]);

  return { cardDeck, dispatch, error };
};

export { useCards };
