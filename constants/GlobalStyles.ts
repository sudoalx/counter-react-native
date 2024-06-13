import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1, // Allow container to fill the entire screen
    backgroundColor: "#f0f0f0", // Light background color
    padding: 20, // Add some padding for visual spacing
  },
  titleText: {
    fontSize: 24, // Set title font size
    marginBottom: 15,
    fontWeight: "bold", // Make title bold
    color: "#333333",
  },
  linkText: {
    color: "#1E90FF",
    paddingVertical: 10,
  },
  paragraphContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  paragraphText: {
    fontSize: 16, // Font size
    color: "#333", // Text color
    lineHeight: 22, // Line height
  },
  menuContainer: {
    padding: 20,
    backgroundColor: "#ffffff", // White background color
    borderRadius: 10, // Rounded corners
    shadowColor: "#000", // Shadow color for Android
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow radius for iOS
    elevation: 3, // Elevation for Android
    marginVertical: 10, // Vertical margin to space out the menu
  },
});
