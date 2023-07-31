import React from "react";
import "./CostList.css";
import CostItem from "./CostItem/CostItem";

const CostList = (props) => {
  if (props.costs.length === 0) {
    return (
      <h2 className="cost-list__fallback">No any transactions this year.</h2>
    );
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          name={cost.name}
          price={cost.price}
        />
      ))}
    </ul>
  );
};

export default CostList;
