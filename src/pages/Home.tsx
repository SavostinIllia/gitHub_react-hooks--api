import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const cards: Array<number> = new Array(15).fill("").map((_, i) => i);
  return (
    <>
      <Search />
      <div className="row">
        {cards.map((card) => {
          return (
            <div key={card} className="col-sm-4 mb-4">
              <Card />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Home;
