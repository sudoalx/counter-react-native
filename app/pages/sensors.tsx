import { View } from "react-native";
import React from "react";
import { AccelerometerComponent } from "../components/Accelerometer";
import GlobalStyles from "@/constants/GlobalStyles";

const SensorsPage = () => {
  return (
    <View style={GlobalStyles.container}>
      <AccelerometerComponent />
    </View>
  );
};

export default SensorsPage;
