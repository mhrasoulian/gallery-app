import { Card } from "./Card";

interface Props {
  cardList: [];
}

function CardList(props: Props) {
  if (!props.cardList || props.cardList.length === 0) {
    return <p>No Photos yet...</p>;
  }
}

export default CardList;
