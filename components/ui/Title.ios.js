import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 12,
    // borderWidth: Platform.OS === "android" ? 0 : 2,
    // borderWidth: Platform.select({ ios: 2, android: 2 }),
    borderWidth: 2,
    borderColor: "white",
  },
});
