import { StyleSheet, Text, View, Animated } from "react-native";
import { ThemedText } from "../themed-text";
import { useEffect, useRef } from "react";

export default function LoadingToDoList() {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.3,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();
  },[opacity]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider} />
        <Animated.Text style={[styles.title ,{opacity}]}>
          Todo
          <Text style={{ fontWeight: "300", color: "skyblue" }}>List</Text>
        </Animated.Text>
        <View style={styles.divider} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
  },
  divider: {
    backgroundColor: "black",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: "black",
    paddingHorizontal: 64,
  },
});
