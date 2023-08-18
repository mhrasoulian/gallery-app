import React, { ChangeEvent } from "react";

interface Props {
  placeHolder: string;
  onChange(e: ChangeEvent): void;
}

function Search(props: Props) {
  return (
    <input
      onChange={props.handleSearch}
      type="search"
      className="form-control"
      placeholder={props.placeHolder}
    />
  );
}

export default Search;
