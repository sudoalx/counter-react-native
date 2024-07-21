import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";
import MapView, { Marker } from "react-native-maps";

export const MapComponent = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const mapRegion = {
    latitude: location?.coords.latitude ?? 37.78825,
    longitude: location?.coords.longitude ?? -122.4324,
    latitudeDelta: 0.0092,
    longitudeDelta: 0.0092,
  };
  console.log(mapRegion);

  return (
    <View style={styles.container}>
      <TextInput>
        <Text style={styles.paragraph}>{text}</Text>
      </TextInput>
      <MapView style={styles.map} initialRegion={mapRegion}>
        <Marker coordinate={mapRegion} title="Current location" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
