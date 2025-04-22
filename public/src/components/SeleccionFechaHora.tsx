import React, { useState } from "react";

interface SeleccionFechaHoraProps {
  onChange?: (fecha: string, hora: string) => void;
}

const SeleccionFechaHora: React.FC<SeleccionFechaHoraProps> = ({ onChange }) => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleChange = () => {
    if (onChange) onChange(fecha, hora);
  };

  return (
    <div className="fecha-hora-container">
      <h2 className="text-xl font-semibold mb-2">Seleccionar Fecha y Hora</h2>
      <input
        type="date"
        value={fecha}
        onChange={(e) => {
          setFecha(e.target.value);
          handleChange();
        }}
        className="fecha-input"
      />
      <input
        type="time"
        value={hora}
        onChange={(e) => {
          setHora(e.target.value);
          handleChange();
        }}
        className="hora-input"
      />
    </div>
  );
};

export default SeleccionFechaHora;
