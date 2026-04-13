import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { PiezasContext } from "../context/PiezasContext";

export default function AddPiezaScreen({ navigation }) {
  const { agregarPieza } = useContext(PiezasContext);
  const [formData, setFormData] = useState({
    pieza: "",
    marca: "",
    numeroSerie: "",
    fecha: new Date().toISOString().split("T")[0],
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.pieza ||
      !formData.marca ||
      !formData.numeroSerie ||
      !formData.fecha
    ) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    try {
      await agregarPieza(formData);
      Alert.alert("Éxito", "Pieza agregada correctamente", [
        {
          text: "OK",
          onPress: () => {
            setFormData({
              pieza: "",
              marca: "",
              numeroSerie: "",
              fecha: new Date().toISOString().split("T")[0],
            });
            navigation.goBack();
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "No se pudo agregar la pieza");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Registro de piezas</Text>

        <View style={styles.formRow}>
          <Text style={styles.label}>Pieza</Text>
          <TextInput
            style={styles.input}
            value={formData.pieza}
            onChangeText={(value) => handleChange("pieza", value)}
          />
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Marca</Text>
          <TextInput
            style={styles.input}
            value={formData.marca}
            onChangeText={(value) => handleChange("marca", value)}
          />
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>No. Serie</Text>
          <TextInput
            style={styles.input}
            value={formData.numeroSerie}
            onChangeText={(value) => handleChange("numeroSerie", value)}
          />
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Fecha de Cambio</Text>
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            value={formData.fecha}
            onChangeText={(value) => handleChange("fecha", value)}
          />
        </View>

        <View style={styles.spacer} />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonTextCancel}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  content: {
    padding: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2d3e50",
    textAlign: "center",
    marginBottom: 40,
    letterSpacing: 0.3,
  },
  formRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    color: "#2d3e50",
    width: 100,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  input: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: "#bdc3c7",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    backgroundColor: "#fff",
    color: "#2d3e50",
    fontWeight: "500",
  },
  spacer: {
    flex: 1,
    minHeight: 60,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    paddingBottom: 30,
  },
  button: {
    borderWidth: 0,
    backgroundColor: "#3498db",
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    minWidth: 110,
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonCancel: {
    borderWidth: 0,
    backgroundColor: "#95a5a6",
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    minWidth: 110,
    shadowColor: "#95a5a6",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  buttonTextCancel: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
