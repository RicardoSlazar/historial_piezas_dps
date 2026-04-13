import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "PIEZAS_APP";

export const guardarDatos = async (data) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(data));
  } catch (error) {
    console.log("Error guardando datos:", error);
  }
};

export const obtenerDatos = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);
    if (!data) return [];

    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed)) {
      console.log("Datos no son un array, limpiando...");
      await AsyncStorage.removeItem(KEY);
      return [];
    }
    return parsed;
  } catch (error) {
    console.log("Error obteniendo datos:", error);

    try {
      await AsyncStorage.removeItem(KEY);
    } catch (cleanError) {
      console.log("Error al limpiar datos:", cleanError);
    }
    return [];
  }
};

export const limpiarDatos = async () => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (error) {
    console.log("Error al limpiar datos:", error);
  }
};
