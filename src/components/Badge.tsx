import React from "react";

interface Props {
  text: string;
  type: string;
}

function Badge(props: Props) {
  return <span className={`badge ${props.type}`}>{props.text}</span>;
}

export default Badge;
