import { View, Text } from "react-native";
import React from "react";
import { Sensors } from "../components/Sensors";
import { Drawer } from "expo-router/drawer";

const SensorsPage = () => {
  return (
    <View>
      <Drawer.Screen
        options={{
          title: "Sensors",
        }}
      />
      <Text>Sensores</Text>
      <Sensors />
    </View>
  );
};

export default SensorsPage;
