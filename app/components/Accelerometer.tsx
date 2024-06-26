import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Accelerometer } from "expo-sensors";
import { Title } from "@/components/Title";

export const AccelerometerComponent = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);
    });
    Accelerometer.setUpdateInterval(1000);
    return () => {
      Accelerometer.removeAllListeners();
    };
  }, []);

  return (
    <View>
      <Title>Accelerometer</Title>
      <View>
        <Text style={styles.dataText}>X: {data.x.toFixed(2)}</Text>
        <Text style={styles.dataText}>Y: {data.y.toFixed(2)}</Text>
        <Text style={styles.dataText}>Z: {data.z.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dataText: {
    fontSize: 18,
    marginVertical: 5,
  },
});
