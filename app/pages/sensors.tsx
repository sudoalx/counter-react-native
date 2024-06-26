import { View } from "react-native";
import React from "react";
import { Sensors } from "../components/Sensors";
import { Title } from "@/components/Title";
import GlobalStyles from "@/constants/GlobalStyles";

const SensorsPage = () => {
  return (
    <View style={GlobalStyles.container}>
      <Title>Sensors</Title>
      <Sensors />
    </View>
  );
};

export default SensorsPage;
