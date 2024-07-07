import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1, // Allow container to fill the entire screen
    backgroundColor: "#A8FF33", // Light background color
    padding: 20, // Add some padding for visual spacing
  },
  header: {
    flexDirection: "row", // Arrange elements horizontally
    justifyContent: "space-between", // Distribute evenly
    alignItems: "center", // Align vertically in center
    marginBottom: 20, // Add some margin below the header
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
    marginVertical: 4,
    fontSize: 16, // Font size
    color: "#333", // Text color
    lineHeight: 22, // Line height
  },
  menuContainer: {
    padding: 20,
    backgroundColor: "#bd93f9",
    borderRadius: 10, // Rounded corners
    shadowColor: "#000", // Shadow color for Android
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow radius for iOS
    elevation: 3, // Elevation for Android
    marginVertical: 10, // Vertical margin to space out the menu
  },
  counterContainer: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00358E",
    borderRadius: 10,
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  counterText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  incrementButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  decrementButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});
