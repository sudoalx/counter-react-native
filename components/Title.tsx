import GlobalStyles from "@/constants/GlobalStyles";
import { Text } from "react-native";

interface Props {
  children: string;
}

export const Title = ({ children }: Props) => {
  return <Text style={GlobalStyles.titleText}>{children}</Text>;
};
