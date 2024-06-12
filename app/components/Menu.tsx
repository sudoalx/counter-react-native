import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export const Menu = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>Menu</Text>
      <Link style={styles.linkStyle} href="/pages/about">
        About
      </Link>
      <Link style={styles.linkStyle} href="/pages/contact">
        Contact
      </Link>
      <Link style={styles.linkStyle} href="/pages/location">
        Location
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20, // Set title font size
    fontWeight: "bold", // Make title bold
  },
  menuContainer: {
    display: "flex",
    backgroundColor: "red",
  },
  linkStyle: {
    color: "blue",
  },
});
