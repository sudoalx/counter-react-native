import { View } from "react-native";
import React from "react";
import { AccelerometerComponent } from "../components/Accelerometer";
import GlobalStyles from "@/constants/GlobalStyles";
import { GyroscopeComponent } from "../components/Gyroscope";
import { LightSensorComponent } from "../components/LightSensor";

const SensorsPage = () => {
  return (
    <View style={GlobalStyles.container}>
      <AccelerometerComponent />
      <GyroscopeComponent />
      <LightSensorComponent />
    </View>
  );
};

export default SensorsPage;
