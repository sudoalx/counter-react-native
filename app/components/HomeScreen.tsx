import { Paragraph } from "@/components/Paragraph";
import GlobalStyles from "@/constants/GlobalStyles";
import { Text, View } from "react-native";

interface Props {
  name?: string;
}

export const HomeScreen = ({ name }: Props) => {
  return (
    <View>
      <Text style={GlobalStyles.titleText}>Proyecto Unidad II - Continuación del desarrollo de la app</Text>
      <Text style={GlobalStyles.header}>Hola, {name ?? "usuario"}.</Text>
      <Paragraph>
       Bienvenido a mi Proyecto Unidad II - Continuación del desarrollo de la app
       Este fue creado por Diana, Yaneth, Sandra, Danielle y Cristian
       Este lo creamos en clase con ayuda de nuestro profesor Nestor Alexander Castañeda
       El cual Dia a dia en clase nos explicaba y enseñaba paso a paso 
      </Paragraph>
    </View>
  );
};
