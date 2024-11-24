import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../themed-text";

interface Props {
  style?: any;
}

export default function AddListButton({ style }: Props) {
  return (
    <View style={[styles.default,style]}>
      <TouchableOpacity style={styles.icon}>
        <AntDesign name="plus" size={16} color={"purple"} />
      </TouchableOpacity>
      <ThemedText style={styles.text}>เพิ่มรายการ</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  default: {},
  icon: {
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "purple",
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
});
