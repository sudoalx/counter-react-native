import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Balance = () => {
  return (
    <View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Wallet</Text>
        <Text style={styles.balanceText}>$5,100.00</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.depositButton]}>
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: "#3D3F47",
    padding: 20,
  },
  balanceTitle: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  balanceText: {
    fontSize: 50,
    color: "#FFF",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
  depositButton: {
    backgroundColor: "#2ECC71",
  },
});
