import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

function Form(props: Props) {
  return <form className="mt-5">{props.children}</form>;
}

export default Form;
