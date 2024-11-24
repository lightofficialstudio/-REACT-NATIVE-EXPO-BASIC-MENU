import { FlatList, Image, StyleSheet, View } from "react-native";
import ParallaxScrollView from "@/src/components/parallax-scroll-view";
import { ThemedView } from "@/src/components/themed-view";
import { ThemedText } from "@/src/components/themed-text";
import { HelloWave } from "@/src/components/hello-wave";
import LoadingToDoList from "@/src/components/loading/todo-list-loading";
import { useEffect, useState } from "react";
import AddListButton from "@components/button/add-list-button";
import { tempData } from "@/src/utils/JSON/todo-list-temp";
import TodoListButton from "@/src/components/button/todo-list-button";
import { Link } from "expo-router";

export default function TodoScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  });

  const loader = () => {
    return <LoadingToDoList />;
  };

  return (
    <>
      {isLoading ? (
        loader()
      ) : (
        <ParallaxScrollView
          headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
          headerImage={
            <Image source={require("@/assets/images/todo-bg.png")} />
          }
        >
          {/* Title & Text */}
          <ThemedView style={styles.titleContainer}>
            <ThemedView style={styles.subContainer}>
              <ThemedText type="title">Todo App!</ThemedText>
              <ThemedText type="subtitle">จดรายการสิ่งที่่ต้องทำ</ThemedText>
            </ThemedView>
            {/* Button */}
            <View>
              <AddListButton style={styles.addListButton} />
            </View>
          </ThemedView>

          {/* Content */}
          <ThemedView style={{}}>
            {/* <Link href="/todo/create">View user</Link> */}

            <FlatList
              data={tempData}
              keyExtractor={(item) => item.name}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <TodoListButton list={item} />}
            />
          </ThemedView>
        </ParallaxScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },
  subContainer: {},
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  addListButton: {
    width: "100%",
  },
});
