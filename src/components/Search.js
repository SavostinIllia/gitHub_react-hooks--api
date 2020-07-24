import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { GithubContext } from "../context/github/githubContext";

const Search = ({}) => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onsubmit = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    if (value.trim()) {
      github.search(value.trim());
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
