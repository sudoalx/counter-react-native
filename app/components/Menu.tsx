import { Title } from "@/components/Title";
import GlobalStyles from "@/constants/GlobalStyles";
import { View } from "react-native";
import { HorizontalItems } from "./HorizontalItems";

interface Link {
  name: string;
  path: string;
}

export const Menu = () => {
  const menuLinks: Link[] = [
    { name: "About", path: "/(pages)/about" },
    { name: "Contact", path: "/(pages)/contact" },
    { name: "Location", path: "/(pages)/location" },
    { name: "Sensors", path: "/(pages)/sensors" },
  ];
  return (
    <View style={GlobalStyles.menuContainer}>
      <Title>Explore the app</Title>
      <HorizontalItems links={menuLinks} />
    </View>
  );
};
