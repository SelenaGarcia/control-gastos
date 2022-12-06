import CloseBtn from "../../public/img/cerrar.svg";
import { useState } from "react";
import Message from "./Message";

const Modal = ({ setModal, animar, setAnimar }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(0);
  const [message, setMessage] = useState("");

  const closeModal = () => {
    console.log("closeModal");
    setAnimar(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log("send form");

    if ([name, amount, category].includes("")) {
      setMessage("Todos los campos son obligatorios");

      setTimeout(() => {
        setMessage("");
      }, 500);
      return;
    }
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="Cerrar" onClick={closeModal} />
      </div>
      <form
        className={`formulario ${animar ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo Gasto</legend>

        {message && <Message tipo="error"> {message} </Message>}
        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>
          <input
            id="name"
            type="text"
            placeholder="Nombre del Gasto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad del Gasto</label>
          <input
            id="amount"
            type="text"
            placeholder="Cantidad del Gasto"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">----Seleccione alguna----</option>
            <option value="ahorro">ahorro</option>
            <option value="casa">casa</option>
            <option value="Ocio">Ocio</option>
            <option value="salud">salud</option>
            <option value="comida">comida</option>
          </select>
        </div>

        <input type="submit" value="Add Budget" />
      </form>
    </div>
  );
};
export default Modal;
