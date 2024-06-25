import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";

export default function Contact() {
  return (
    <View>
      <Drawer.Screen
        options={{
          title: "Contact",
        }}
      />
      <Text>Contact</Text>
      <Text>Phone: (232) 23-32 23-23</Text>
    </View>
  );
}
