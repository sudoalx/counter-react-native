import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contador: {count}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={handleDecrement}
          style={styles.decrementButton}
        >
          <Text style={styles.buttonText}>Decrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleIncrement}
          style={styles.incrementButton}
        >
          <Text style={styles.buttonText}>Incrementar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#66B3FF",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  counterText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  incrementButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  decrementButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
