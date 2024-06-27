import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface Props {
  links: Link[];
}

interface Link {
  name: string;
  path: string;
}

export const HorizontalItems = ({ links }: Props) => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollContainer}
    >
      {links.map((link, _i) => (
        <Link key={`${_i}${link.name}`} href={link.path} style={styles.link}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{link.name}</Text>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#bd93f9",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  link: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#282a36", // Dracula dark purple
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "#bd93f9", // Bright Dracula accent color
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
