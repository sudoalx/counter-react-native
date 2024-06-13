import { Paragraph } from "@/components/Paragraph";
import { Title } from "@/components/Title";
import GlobalStyles from "@/constants/GlobalStyles";
import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function About() {
  return (
    <View style={GlobalStyles.container}>
      <Stack.Screen
        options={{
          title: "About",
        }}
      />
      <Title>About us</Title>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
        molestiae adipisci qui soluta illo tempora consequatur omnis praesentium
        exercitationem repellendus aliquam facere, eveniet illum. Reiciendis
        eligendi accusamus cupiditate quaerat fuga?
      </Paragraph>
      <Paragraph>
        Visit us:{" "}
        <Link style={GlobalStyles.linkText} href="/pages/location" replace>
          Our offices
        </Link>
      </Paragraph>
    </View>
  );
}
