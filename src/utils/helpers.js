export const ordenarPorFecha = (data) => {
  return data.sort(
    (a, b) => new Date(b.fecha) - new Date(a.fecha)
  );
};