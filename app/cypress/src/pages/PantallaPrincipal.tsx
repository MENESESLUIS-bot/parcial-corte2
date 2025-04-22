import React from "react";

import DatosCliente from "../components/DatosCliente";
import SeleccionFechaHora from "../components/SeleccionFechaHora";
import SeleccionMesa from "../components/SeleccionMesa";

const PantallaPrincipal = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 grid gap-6">
      <h1 className="text-2xl font-bold text-center mb-6">: Sistema de Gestión de Reservas</h1>
      
      <DatosCliente />
      <SeleccionFechaHora />
      <SeleccionMesa />
      
    </div>

    
  );
};

export default PantallaPrincipal;
