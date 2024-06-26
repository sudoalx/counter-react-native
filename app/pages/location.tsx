import { Paragraph } from "@/components/Paragraph";
import { Title } from "@/components/Title";
import GlobalStyles from "@/constants/GlobalStyles";
import { View } from "react-native";

export default function Location() {
  return (
    <View style={GlobalStyles.container}>
      <Title>Location</Title>
      <Paragraph>Visit us at: Street Name, City, Country</Paragraph>
    </View>
  );
}
