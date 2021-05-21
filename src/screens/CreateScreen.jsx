import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.label}>Enter Note Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChange={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Note Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChange={(text) => setContent(text)}
        multiline
        numberOfLines={8}
      />
      <Button
        title="Save"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    padding: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 15,
    textAlignVertical: "top",
  },
  label: {
    fontSize: 18,
    color: "#000",
    marginBottom: 5,
  },
});

export default CreateScreen;
