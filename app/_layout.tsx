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
          }}
        />
        <Drawer.Screen
          name="pages/balance"
          options={{
            drawerLabel: "Balance",
            headerTitle: "Balance",
          }}
        />
        <Drawer.Screen
          name="pages/sensors"
          options={{
            drawerLabel: "Sensors",
            headerTitle: "Sensors",
          }}
        />
        <Drawer.Screen
          name="pages/contact"
          options={{
            drawerLabel: "Contact",
            headerTitle: "Contact",
          }}
        />
        <Drawer.Screen
          name="pages/location"
          options={{
            drawerLabel: "Location",
            headerTitle: "Location",
          }}
        />
        <Drawer.Screen
          name="pages/about"
          options={{
            drawerLabel: "About",
            headerTitle: "About",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
