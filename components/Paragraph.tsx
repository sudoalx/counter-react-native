import GlobalStyles from "@/constants/GlobalStyles";
import { Text, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: Props) => {
  return (
    <View>
      <Text style={GlobalStyles.paragraphText}>{children}</Text>
    </View>
  );
};
