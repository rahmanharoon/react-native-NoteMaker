import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context);

  useEffect(() => {
    getBlogPost();
  
    const listener = navigation.addListener("didFocus", () => {
      getBlogPost();
    });

    return () => {
      listener.remove();
    }
  }, []);

  return (
    <View>
      {state.length === 0 ? (
        <Text style={styles.noData}>No Notes Found</Text>
      ) : (
        <FlatList
          data={state}
          keyExtractor={(blogPosts) => blogPosts.title}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.row}
                onPress={() => navigation.navigate("Show", { id: item.id })}
              >
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    marginBottom: 10,
    marginTop: 10,
    left: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  noData: {
    fontSize: 24,
    alignSelf: "center",
    top: 20,
    color: "#000",
  },
});

export default IndexScreen;
