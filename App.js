import React, { useEffect } from "react";
import { PiezasProvider } from "./src/context/PiezasContext";
import Navigation from "./src/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  useEffect(() => {
    const cleanCorruptData = async () => {
      try {
        const data = await AsyncStorage.getItem("PIEZAS_APP");
        if (data) {
          JSON.parse(data);
        }
      } catch (error) {
        console.log("Limpiando datos corruptos...");
        await AsyncStorage.removeItem("PIEZAS_APP");
      }
    };
    cleanCorruptData();
  }, []);

  return (
    <PiezasProvider>
      <Navigation />
    </PiezasProvider>
  );
}
