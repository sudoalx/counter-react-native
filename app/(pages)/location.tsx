import { Paragraph } from "@/components/Paragraph";
import { Title } from "@/components/Title";
import GlobalStyles from "@/constants/GlobalStyles";
import { View } from "react-native";

export default function Location() {
  return (
    <View style={GlobalStyles.container}>
      <Title>Our offices</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero repellat
        quas nesciunt cupiditate debitis, assumenda fugit vitae quae officiis
        accusamus nihil et quis nisi odit modi, facere iusto ipsam deleniti?
      </Paragraph>
      <Paragraph>Visit us at: Street Name, City, Country</Paragraph>
    </View>
  );
}
