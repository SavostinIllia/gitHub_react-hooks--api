import React from "react";

const Repos = ({ repos }) => {
  return (
    <>
      {repos.map((repo, index) => {
        return (
          <div className="card mb-3" key={index}>
            <div className="card-body">
              <h5>
                <a href={repo.html_url} target="_blank">
                  {repo.name}
                </a>
              </h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Repos;
