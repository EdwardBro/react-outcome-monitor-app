import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDate, setInputDate] = useState("");

  /*  const [userInput, setUserInput] = useState({
    name: "",
    price: "",
    date: "",
  });*/

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    /*    setUserInput({
      ...userInput,
      name: event.target.value,
    });*/
    /*    setUserInput((previousState) => {
      return {
        ...previousState,
        name: event.target.value,
      };
    });*/
  };

  const priceChangeHandler = (event) => {
    setInputPrice(event.target.value);
    //setUserInput({ ...userInput, price: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    /*    setUserInput({
      ...userInput,
      date: event.target.value,
    });*/
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      date: new Date(inputDate),
      name: inputName,
      price: inputPrice,
    };

    props.onSaveCostData(costData);
    setInputName("");
    setInputPrice("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Price</label>
          <input
            onChange={priceChangeHandler}
            type="number"
            value={inputPrice}
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={inputDate}
            type="date"
            min="2020-01-01"
            step="2023-12-31"
          ></input>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add Cost</button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
