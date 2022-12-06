import React from "react";
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Planning</h1>
      {isValidBudget ? (
        <BudgetControl budget={budget} setIsValidBudget={setIsValidBudget} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};
export default Header;
