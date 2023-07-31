import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 6, 19),
    name: "Lenkkarit/Sneakers",
    price: 65.95,
  },
  {
    id: "c2",
    date: new Date(2023, 5, 26),
    name: "Olut/Beer",
    price: 15.7,
  },
  {
    id: "c3",
    date: new Date(2023, 5, 23),
    name: "Matto/Carpet",
    price: 27.95,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
