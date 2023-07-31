import "./CostItem.css";
import Card from "../../UI/Card/Card";
import CostDate from "./CostDate/CostDate";

const CostItem = (props) => {
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item-name">
          <h2>{props.name}</h2>
          <div className="cost-item-price">€{props.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default CostItem;
