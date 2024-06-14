import GlobalStyles from "@/constants/GlobalStyles";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.counterText}>Contador: {count}</Text>
      <View style={GlobalStyles.buttonsContainer}>
        <TouchableOpacity
          onPress={handleDecrement}
          style={GlobalStyles.decrementButton}
        >
          <Text style={GlobalStyles.buttonText}>Decrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleIncrement}
          style={GlobalStyles.incrementButton}
        >
          <Text style={GlobalStyles.buttonText}>Incrementar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
