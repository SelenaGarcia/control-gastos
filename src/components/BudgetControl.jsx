const BudgetControl = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {
  const currencyFormatter = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Graphic</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> ${currencyFormatter(budget)}
        </p>
        <p>
          <span>Disponible: </span> ${currencyFormatter(budget)}
        </p>
        <p>
          <span>Gastado: </span> ${currencyFormatter(budget)}
        </p>
      </div>
    </div>
  );
};
export default BudgetControl;
