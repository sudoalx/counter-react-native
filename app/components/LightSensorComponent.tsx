import { Title } from "@/components/Title";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { LightSensor } from "expo-sensors";
import { useEffect, useState } from "react";

type Subscription = {
  remove: () => void;
};

export const LightSensorComponent = () => {
  const [{ illuminance }, setData] = useState({ illuminance: 0 });
  const [subscription, setSubscription] = useState<null | Subscription>(null);

  const toggle = () => {
    if (subscription) {
      unsubscribe();
    } else {
      subscribe();
    }
  };

  const subscribe = () => {
    setSubscription(
      LightSensor.addListener((sensorData) => {
        setData(sensorData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Title>Light Sensor</Title>
      <View style={styles.sensor}>
        <Text>
          Illuminance:{" "}
          {Platform.OS === "android"
            ? `${illuminance} lx`
            : `Only available on Android`}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sensor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
  },
});
