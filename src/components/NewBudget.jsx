import React from "react";

const NewBudget = ({budget, setBudget}) => {
    return (
        <div className="contenedor-presupuesto conteneder sombra">
            <form className="formulario">
                <div className="campo">
                    <label>
                        Budget Definition
                    </label>
                    <input
                    className="nuevo-presupuesto"
                    type="text"
                    placeholder="Add your budget"
                    value={budget}
                    onChange={e =>setBudget(e.target.value)}
                    />
                </div>
                <input
                type="submit"
                value="ADD"
                />
            </form>
        </div>
    )
}
export default NewBudget;