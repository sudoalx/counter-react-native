import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";
import MapView, { Marker } from "react-native-maps";

export const MapComponent = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const mapRef = useRef<MapView>(null);

  const centerMap = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    if (location?.coords) {
      // Pre-cached location are stringified which should be a STRING
      // value and cause app to crash. Parse them to Number(float) value
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      // Gradually animate map to user position
      const region = {
        latitudeDelta: 0.0092,
        longitudeDelta: 0.0092,
        latitude,
        longitude,
      };
      mapRef.current?.animateToRegion(region, 2000);
    }
  };

  useEffect(() => {
    centerMap();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <TextInput
        multiline
        style={{
          width: "100%",
          color: "black",
          padding: 10,
          marginTop: 40,
        }}
        placeholder="Location"
        value={errorMsg?.length ? errorMsg : JSON.stringify(location)}
        editable={false}
      />
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            longitudeDelta: 0,
            latitudeDelta: 0,
          }}
          ref={mapRef}
        >
          <Marker
            coordinate={
              location?.coords
                ? {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                  }
                : { latitude: 0, longitude: 0 }
            }
            title="Current location"
          />
        </MapView>
        <TouchableOpacity onPress={centerMap} style={styles.centerButton}>
          <Text>Center map</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  centerButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
