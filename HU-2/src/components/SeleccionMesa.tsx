import React, { useState } from "react";

const SeleccionMesa = () => {
  const [mesa, setMesa] = useState("");

  return (
    <div className="seleccion-mesa-container">
      <h2 className="text-xl font-semibold mb-2">Seleccionar Mesa</h2>
      <select
        value={mesa}
        onChange={(e) => setMesa(e.target.value)}
        className="mesa-select"
      >
        <option value="">Seleccione una mesa</option>
        <option value="1">Mesa 1</option>
        <option value="2">Mesa 2</option>
        <option value="3">Mesa 3</option>
      </select>
      <p className="mt-2">Mesa seleccionada: {mesa || "No seleccionada"}</p>
    </div>
  );
};

export default SeleccionMesa;
