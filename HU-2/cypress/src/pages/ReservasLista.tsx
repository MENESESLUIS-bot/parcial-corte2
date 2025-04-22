import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ReservasLista = () => {
  interface Reserva {
    fecha: string;
    hora: string;
    cliente: {
      nombre: string;
      contacto: string;
    };
    mesa: string;
  }

  const [reservas, setReservas] = useState<Reserva[]>([]);
  const history = useHistory();

  useEffect(() => {
    // Quemar datos de reserva
    const dummyReservas: Reserva[] = [
      {
        fecha: "2023-10-01",
        hora: "18:00",
        cliente: { nombre: "Luis Hernández", contacto: "123456789" },
        mesa: "1",
      },
      {
        fecha: "2023-10-02",
        hora: "20:00",
        cliente: { nombre: "Ana Pérez", contacto: "987654321" },
        mesa: "2",
      },
    ];
    setReservas(dummyReservas);
  }, []);

  const handleRedirect = () => {
    history.push("/reservas-lista");
  };

  return (
    <div className="max-w-5xl mx-auto p-4 bg-black text-white">
      <h1 className="text-2xl font-bold text-center mb-6">Lista de Reservas</h1>
      {reservas.length > 0 ? (
        <ul className="list-disc pl-5">
          {reservas.map((reserva, index) => (
            <li key={index} className="mb-4">
              <p><strong>Fecha:</strong> {reserva.fecha}</p>
              <p><strong>Hora:</strong> {reserva.hora}</p>
              <p><strong>Cliente:</strong> {reserva.cliente.nombre} ({reserva.cliente.contacto})</p>
              <p><strong>Mesa:</strong> {reserva.mesa}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No hay reservas registradas.</p>
      )}
      <button
        onClick={handleRedirect}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      >
        Ir a Lista de Reservas
      </button>
    </div>
  );
};

export default ReservasLista;
