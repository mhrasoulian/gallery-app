import React from "react";
import Badge from "./Badge";

interface Props {
  photographer: string;
  imageUrl: string;
  id: number;
  category: string;
  imageAlt: string;
}

function Card(props: Props) {
  return (
    <div className="card col-md-2 m-2">
      <img
        className="card-img-top img-fluid"
        src={props.imageUrl}
        alt={props.imageAlt}
      />
      <div className="card-body">
        <h5 className="card-title">{props.photographer}</h5>
        <p className="card-text">
          <Badge text={props.category} type="bg-secondary" />
        </p>
      </div>
    </div>
  );
}

export default Card;
