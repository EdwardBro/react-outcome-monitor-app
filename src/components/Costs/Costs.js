import "./Costs.css";
import Card from "../UI/Card/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [filterYear, setFilterYear] = useState("2023");

  const yearChangeHandler = (year) => {
    setFilterYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          defaultYear={filterYear}
          onChangeYear={yearChangeHandler}
        />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
