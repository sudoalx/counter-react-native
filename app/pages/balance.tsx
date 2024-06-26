import { View } from "react-native";
import React from "react";
import { Balance } from "../components/Balance";
import GlobalStyles from "@/constants/GlobalStyles";
import { Title } from "@/components/Title";

const BalancePage = () => {
  return (
    <View style={GlobalStyles.container}>
      <Title>Your balance</Title>
      <Balance />
    </View>
  );
};

export default BalancePage;
