import { Text, View } from "react-native";
import { Accelerometer } from "expo-sensors";
import { useEffect, useState } from "react";

export const Sensors = () => {
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
      <View>
        <Text>X: {data.x}</Text>
        <Text>Y: {data.y}</Text>
        <Text>Z: {data.z}</Text>
      </View>
    </View>
  );
};
