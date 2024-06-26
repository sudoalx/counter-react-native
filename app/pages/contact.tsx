import { Paragraph } from "@/components/Paragraph";
import { Title } from "@/components/Title";
import GlobalStyles from "@/constants/GlobalStyles";
import { View } from "react-native";

export default function Contact() {
  return (
    <View style={GlobalStyles.container}>
      <Title>Contact</Title>
      <Paragraph>Call us: +0 (123) 45-67 90-12</Paragraph>
    </View>
  );
}
