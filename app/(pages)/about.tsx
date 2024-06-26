import { Paragraph } from "@/components/Paragraph";
import { Title } from "@/components/Title";
import GlobalStyles from "@/constants/GlobalStyles";
import { Link } from "expo-router";
import { View } from "react-native";

export default function About() {
  return (
    <View style={GlobalStyles.container}>
      <Title>About us</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut
        aliquid iste. Similique velit ratione non enim, harum officiis
        laboriosam, fugit voluptas nostrum magni incidunt provident facilis
        aperiam at hic.
        <View>
          <Link href="/pages/location"></Link>
        </View>
      </Paragraph>
    </View>
  );
}
