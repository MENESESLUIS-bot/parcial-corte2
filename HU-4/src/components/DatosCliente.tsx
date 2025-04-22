import React, { useState } from "react";

const DatosCliente = () => {
  const [cliente, setCliente] = useState({ nombre: "", contacto: "" });

  return (
    <div className="datos-cliente-container">
      <h2 className="text-xl font-semibold mb-2">Datos del Cliente</h2>
      <input
        type="text"
        placeholder="Nombre del cliente"
        value={cliente.nombre}
        onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
        className="cliente-input"
      />
      <input
        type="text"
        placeholder="Contacto del cliente"
        value={cliente.contacto}
        onChange={(e) => setCliente({ ...cliente, contacto: e.target.value })}
        className="cliente-input"
      />
      <p className="mt-2">
        Nombre: {cliente.nombre || "No ingresado"}, Contacto: {cliente.contacto || "No ingresado"}
      </p>
    </div>
  );
};

export default DatosCliente;
