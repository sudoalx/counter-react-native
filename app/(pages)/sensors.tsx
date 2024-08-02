import { View } from "react-native";
import React from "react";
import { AccelerometerComponent } from "../components/Accelerometer";
import GlobalStyles from "@/constants/GlobalStyles";
import { GyroscopeComponent } from "../components/Gyroscope";

const SensorsPage = () => {
  return (
    <View style={GlobalStyles.container}>
      <AccelerometerComponent />
      <GyroscopeComponent />
    </View>
  );
};

export default SensorsPage;
