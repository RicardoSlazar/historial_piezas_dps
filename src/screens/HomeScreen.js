import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { PiezasContext } from "../context/PiezasContext";
import PiezaItem from "../components/PiezaItem";
import DetallesModal from "../components/DetallesModal";

export default function HomeScreen({ navigation }) {
  const { piezas, eliminarPieza } = useContext(PiezasContext);
  const [selectedPieza, setSelectedPieza] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDeletePieza = (id) => {
    eliminarPieza(id);
  };

  const handleSelectPieza = (pieza) => {
    setSelectedPieza(pieza);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedPieza(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Piezas</Text>
      </View>

      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddPieza")}
        >
          <Text style={styles.addButtonText}>Agregar Pieza</Text>
        </TouchableOpacity>
      </View>

      {piezas.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay piezas, Agregue una</Text>
        </View>
      ) : (
        <FlatList
          data={piezas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PiezaItem
              pieza={item}
              onPress={() => handleSelectPieza(item)}
              onDelete={handleDeletePieza}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}

      <DetallesModal
        visible={modalVisible}
        pieza={selectedPieza}
        onClose={handleCloseModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#2d3e50",
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  addButtonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  addButton: {
    backgroundColor: "#3498db",
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.3,
  },
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#95a5a6",
    fontWeight: "500",
  },
});
