import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function RentList({ handleRemove, emptyRentList }) {
  let data;
  const [isSubmited, setIsSubmited] = useState(false);
  const [buttonText, setButtonText] = useState("Place Order");
  const storedData = JSON.parse(localStorage.getItem("rentMovies")) || [];
  const totalCost = 6.99 * storedData.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  data = storedData.map((movie) => (
    <div>
      <div key={movie.id} className="rent-list-container">
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => handleRemove(movie.id)}
        />
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie Poster"
        />

        <p className="rent-list-price">$6.99</p>
      </div>
    </div>
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Orde");
      emptyRentList();
      setIsSubmited(true);
    }, 3000);
  }
  if (isSubmited) {
    return <h1>Empty</h1>;
  }
  console.log(isSubmited);
  return (
    <div className="rent-list-page">
      <h1 className="rent-list-title">Check Out</h1>
      {data}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
        <button onClick={placeOrder}>{buttonText}</button>
      </div>
    </div>
  );
}

export default RentList;
