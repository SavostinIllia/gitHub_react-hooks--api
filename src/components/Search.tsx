import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  const { show } = useContext(AlertContext);
  const onsubmit = (e: any) => {
    if (e.key === "Enter") {
      show("This is alert");
    }
  };
  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Type nickname..."
        className="form-control"
        onKeyPress={onsubmit}
      />
    </div>
  );
};
export default Search;
