import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface TodoListButtonProps {
  list: {
    name: string;
    color: string;
    todos: {
      title: string;
      completed: boolean;
    }[];
  };
}

export default function TodoListButton(props: TodoListButtonProps) {
  const { list } = props;
  return (
    <TouchableOpacity style={styles.touchableOpacity}>
      <View
        style={[
          styles.listContainer,
          { borderColor: list.color, backgroundColor: "#FFF" },
        ]}
      >
        {/* NAME */}
        <Text style={styles.nameText}>{list.name}</Text>
        {/* STATUS */}
        <Text style={styles.statusText}>
          {list.todos.filter((todo) => todo.completed).length} /{" "}
          {list.todos.length} completed
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    width: "100%",
  },
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 12,
    alignItems: "flex-start", // ใช้เพื่อจัดใน Cross Axis
    justifyContent: "space-between", // ใช้ใน Main Axis
    height: 120, // ต้องมีพื้นที่แนวตั้งเพียงพอ
    borderWidth: 2,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  statusText: {
    fontSize: 14,
    color: "#666",
  },
});
