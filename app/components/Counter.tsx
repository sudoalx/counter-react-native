import GlobalStyles from "@/constants/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <View style={GlobalStyles.counterContainer}>
      <Text style={GlobalStyles.counterText}>Counter: {count}</Text>
      <View style={GlobalStyles.buttonsContainer}>
        <TouchableOpacity
          onPress={handleDecrement}
          style={GlobalStyles.decrementButton}
        >
          <View style={GlobalStyles.buttonContent}>
            <Ionicons name="remove-circle" size={32} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleIncrement}
          style={GlobalStyles.incrementButton}
        >
          <View style={GlobalStyles.buttonContent}>
            <Ionicons name="add-circle" size={32} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
