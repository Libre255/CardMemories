import { useEffect, useState } from "react";
import { CardsAPI } from "../../../service/cards/CardsAPI";

interface Props {
  cardDeck: CardsAPI[];
}

const useGridCardPostion = ({ cardDeck }: Props) => {
  const [rowColumn, setRowColumn] = useState<{ row: string; column: string }>({
    row: "60vh",
    column: "18vw 18vw",
  });

  useEffect(() => {
    switch (cardDeck.length) {
      case 4:
        setRowColumn({ row: "60vh", column: "18vw 18vw 18vw 18vw" });
        break;
      case 6:
        setRowColumn({ row: "56vh", column: "15vw 15vw 15vw 15vw 15vw 15vw" });
        break;
      case 8:
        setRowColumn({ row: "37vh 37vh", column: "15vw 15vw 15vw 15vw" });
        break;
      case 10:
        setRowColumn({ row: "37vh 37vh", column: "15vw 15vw 15vw 15vw 15vw" });
        break;
      case 12:
        setRowColumn({
          row: "37vh 37vh",
          column: "15vw 15vw 15vw 15vw 15vw 15vw",
        });
        break;
      default:
        break;
    }
  }, [cardDeck]);

  return { rowColumn };
};

export { useGridCardPostion };
