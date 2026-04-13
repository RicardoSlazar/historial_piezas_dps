import React, { createContext, useState, useEffect } from "react";
import { guardarDatos, obtenerDatos } from "../services/storage";
import { ordenarPorFecha } from "../utils/helpers";

export const PiezasContext = createContext();

export const PiezasProvider = ({ children }) => {
  const [piezas, setPiezas] = useState([]);

  // Cargar datos al iniciar
  useEffect(() => {
    cargarPiezas();
  }, []);

  const cargarPiezas = async () => {
    const data = await obtenerDatos();
    if (data) {
      setPiezas(ordenarPorFecha(data));
    }
  };

  const agregarPieza = async (pieza) => {
    // Validaciones
    if (!pieza.pieza || !pieza.marca || !pieza.numeroSerie || !pieza.fecha) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Validar fecha
    const fechaDate = new Date(pieza.fecha);
    if (isNaN(fechaDate)) {
      alert("Fecha inválida");
      return;
    }

    const nueva = {
      id: Date.now().toString(),
      pieza: String(pieza.pieza),
      marca: String(pieza.marca),
      numeroSerie: String(pieza.numeroSerie),
      fecha: String(pieza.fecha),
    };

    const nuevasPiezas = ordenarPorFecha([nueva, ...piezas]);
    setPiezas(nuevasPiezas);
    await guardarDatos(nuevasPiezas);
  };

  // Eliminar pieza
  const eliminarPieza = async (id) => {
    const nuevasPiezas = piezas.filter((p) => p.id !== id);
    setPiezas(nuevasPiezas);
    await guardarDatos(nuevasPiezas);
  };

  return (
    <PiezasContext.Provider
      value={{
        piezas,
        agregarPieza,
        eliminarPieza,
      }}
    >
      {children}
    </PiezasContext.Provider>
  );
};
