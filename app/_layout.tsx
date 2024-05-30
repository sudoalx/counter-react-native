import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3498db", // Light blue background
        },
        headerTintColor: "#FFF", // White text color
        headerTitleStyle: {
          fontWeight: "semibold",
        },
      }}
    />
  );
}
