import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  const [value, setValue] = useState("");

  const { show } = useContext(AlertContext);
  const onsubmit = (e: any) => {
    if (e.key !== "Enter") {
      return;
    }
    if (value.trim()) {
      console.log(value);
    } else {
      show("Enter the user data");
    }
  };
  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Type nickname..."
        className="form-control"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={onsubmit}
      />
    </div>
  );
};
export default Search;
