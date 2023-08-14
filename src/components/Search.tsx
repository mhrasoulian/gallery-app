import React from "react";

interface Props {
  placeHolder: string;
}

function Search(props: Props) {
  return (
    <>
      <input
        type="search"
        className="form-control"
        placeholder={props.placeHolder}
      />
    </>
  );
}

export default Search;
