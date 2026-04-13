import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function DetallesModal({ visible, pieza, onClose }) {
  if (!pieza) return null;

  return (
    <Modal visible={!!visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.box}>
            <View style={styles.titleBox}>
              <Text style={styles.title}>Detalle de la pieza</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.label}>Pieza:</Text>
              <Text style={styles.value}>{pieza.pieza}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.label}>Marca:</Text>
              <Text style={styles.value}>{pieza.marca}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.label}>No Serie:</Text>
              <Text style={styles.value}>{pieza.numeroSerie}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.label}>Fecha de Cambio:</Text>
              <Text style={styles.value}>{pieza.fecha}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(45, 62, 80, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    width: "100%",
  },
  box: {
    backgroundColor: "#fff",
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  titleBox: {
    backgroundColor: "#fff",
    paddingBottom: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#ecf0f1",
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2d3e50",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  label: {
    fontSize: 13,
    color: "#7f8c8d",
    fontWeight: "700",
    letterSpacing: 0.2,
    textTransform: "uppercase",
  },
  value: {
    fontSize: 15,
    color: "#2d3e50",
    fontWeight: "600",
    flex: 1,
    textAlign: "right",
  },
  buttonContainer: {
    marginTop: 32,
    alignItems: "center",
  },
  closeButton: {
    borderWidth: 0,
    backgroundColor: "#3498db",
    paddingHorizontal: 48,
    paddingVertical: 13,
    borderRadius: 10,
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
