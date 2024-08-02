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

enum IlluminanceLevel {
  Dim = "Dim",
  Normal = "Normal",
  Bright = "Bright",
  NoData = "No data",
}

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

  const getIlluminanceLevel = (illuminance: number): IlluminanceLevel => {
    switch (true) {
      case illuminance < 50:
        return IlluminanceLevel.Dim;
      case illuminance < 1000:
        return IlluminanceLevel.Normal;
      default:
        return IlluminanceLevel.Bright;
    }
  };

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
        <Text>Illuminance Level: {getIlluminanceLevel(illuminance)}</Text>
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
