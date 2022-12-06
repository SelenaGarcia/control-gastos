import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNewBudget from "../public/img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animar, setAnimar] = useState(false);

  const handleNewBudget = () => {
    setModal(true);
    setTimeout(() => {
      setAnimar(true);
    }, 500);
  };
  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <div className="nuevo-gasto">
          <img src={IconoNewBudget} alt="new icon" onClick={handleNewBudget} />
        </div>
      )}
      {modal && (
        <Modal setModal={setModal} animar={animar} setAnimar={setAnimar} />
      )}
    </div>
  );
}

export default App;
