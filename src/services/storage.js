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
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error obteniendo datos:", error);
    return [];
  }
};