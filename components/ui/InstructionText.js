import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontFamily: "sans-regular",
    fontSize: 24,
  },
});
