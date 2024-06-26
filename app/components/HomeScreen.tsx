import { Paragraph } from "@/components/Paragraph";
import GlobalStyles from "@/constants/GlobalStyles";
import { Text, View } from "react-native";

interface Props {
  name?: string;
}

export const HomeScreen = ({ name }: Props) => {
  return (
    <View>
      <Text style={GlobalStyles.titleText}>Bienvenido</Text>
      <Text style={GlobalStyles.header}>Hola, {name ?? "usuario"}.</Text>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        ducimus pariatur veniam a! Totam neque, odit animi distinctio suscipit
        veritatis amet magni eveniet ullam dolorem dolore, tempora ut sapiente
        facilis.
      </Paragraph>
    </View>
  );
};
