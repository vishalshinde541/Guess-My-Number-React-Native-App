import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({ Children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{Children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    borderColor: Colors.accent500,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 36,
    fontFamily: "sans-bold",
    // fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
  },
});
