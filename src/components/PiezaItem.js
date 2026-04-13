import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";

export default function PiezaItem({ pieza, onPress, onDelete }) {
  const handleDelete = () => {
    Alert.alert(
      "Eliminar pieza",
      "¿Estás seguro de que deseas eliminar esta pieza?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => onDelete(pieza.id),
        },
      ],
    );
  };

  // Formatear la fecha
  const formatDate = (dateString) => {
    return dateString;
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.containerPressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.topRow}>
        <View>
          <Text style={styles.label}>Pieza:</Text>
          <Text style={styles.value}>{pieza.pieza}</Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.label}>Fecha de Cambio:</Text>
          <Text style={styles.value}>{formatDate(pieza.fecha)}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 0,
    borderColor: "transparent",
    marginHorizontal: 12,
    marginVertical: 10,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: "hidden",
  },
  containerPressed: {
    backgroundColor: "#f0f7ff",
    shadowColor: "#3498db",
    shadowOpacity: 0.15,
  },
  topRow: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 12,
    color: "#7f8c8d",
    fontWeight: "600",
    letterSpacing: 0.2,
    textTransform: "uppercase",
  },
  value: {
    fontSize: 15,
    color: "#2d3e50",
    fontWeight: "600",
    marginTop: 6,
  },
  deleteButton: {
    borderWidth: 0,
    backgroundColor: "#e74c3c",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: "#e74c3c",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
});
