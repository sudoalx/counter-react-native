// Documentation: https://docs.expo.dev/router/advanced/drawer/

import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            headerTitle: "Home",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="pages/balance"
          options={{
            drawerLabel: "Balance",
            headerTitle: "Balance",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="wallet-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="pages/sensors"
          options={{
            drawerLabel: "Sensors",
            headerTitle: "Sensors",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="pages/contact"
          options={{
            drawerLabel: "Contact",
            headerTitle: "Contact",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="mail-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="pages/location"
          options={{
            drawerLabel: "Location",
            headerTitle: "Location",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="pin-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="pages/about"
          options={{
            drawerLabel: "About",
            headerTitle: "About",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="information-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
