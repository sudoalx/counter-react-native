import { StyleSheet, Text, View } from "react-native";

interface Props {
  name?: string;
}

export const HomeScreen = ({ name }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Bienvenido</Text>
      <Text style={styles.header}>Hola, {name ?? "usuario"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow container to fill the entire screen
  },
  header: {
    flexDirection: "row", // Arrange elements horizontally
    justifyContent: "space-between", // Distribute evenly
    alignItems: "center", // Align vertically in center
    marginBottom: 20, // Add some margin below the header
  },
  headerTitle: {
    fontSize: 20, // Set title font size
    fontWeight: "bold", // Make title bold
  },
});
