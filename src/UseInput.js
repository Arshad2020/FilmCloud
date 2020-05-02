import React, { useState } from "react";

function UseInput(intialState) {
  const [inputs, setInputs] = useState(intialState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setInputs({ ...inputs, [name]: value });
  };
  const reset = () => setInputs(intialState);
  return [inputs, handleInputChange, reset];
}
export default UseInput;
