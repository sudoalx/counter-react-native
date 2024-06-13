import { Title } from "@/components/Title";
import GlobalStyles from "@/constants/GlobalStyles";
import { Link } from "expo-router";
import { View } from "react-native";

export const Menu = () => {
  return (
    <View style={GlobalStyles.menuContainer}>
      <Title>Menu</Title>
      <Link style={GlobalStyles.linkText} href="/pages/about">
        About
      </Link>
      <Link style={GlobalStyles.linkText} href="/pages/contact">
        Contact
      </Link>
      <Link style={GlobalStyles.linkText} href="/pages/location">
        Location
      </Link>
    </View>
  );
};
