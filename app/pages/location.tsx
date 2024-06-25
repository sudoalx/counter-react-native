import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";

export default function Location() {
  return (
    <View>
      <Drawer.Screen
        options={{
          title: "Location",
        }}
      />
      <Text>Location</Text>
      <Text>Visit us at: Street Name, City, Country</Text>
    </View>
  );
}
