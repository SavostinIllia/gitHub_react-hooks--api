import React from "react";
import { Link } from "react-router-dom";

const Card = ({}) => {
  return (
    <div className="card">
      <img src={""} alt={""} className="card-img-top" />
      <div className="card-body">
        <h5>React</h5>
        <Link to={"/profile/" + "react"} className="btn btn-primary">
          Open Profile
        </Link>
      </div>
    </div>
  );
};
export default Card;
