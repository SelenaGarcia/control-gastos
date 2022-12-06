import React, { useState } from "react";
import Message from "./Message";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState("");
  const handleBudget = (e) => {
    e.preventDefault();
    console.log(Number(budget));
    if (!budget || budget < 0) {
      setMessage("No es válido.");
      return;
    }
    setMessage("");
    setIsValidBudget(true);
  };
  return (
    <div className="contenedor-presupuesto conteneder sombra">
      <form className="formulario" onSubmit={handleBudget}>
        <div className="campo">
          <label>Budget Definition</label>
          <input
            className="nuevo-presupuesto"
            type="Number"
            placeholder="Add your budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <input type="submit" value="ADD" />
        {message && <Message tipo="error"> {message}</Message>}
      </form>
    </div>
  );
};
export default NewBudget;
