import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues, label1, label2 }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.label}>{label1}:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>{label2}:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline
        numberOfLines={8}
      />
      <Button title="Save" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
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
    paddingTop: 5,
  },
  label: {
    fontSize: 18,
    color: "#000",
    marginBottom: 5,
  },
});

export default BlogPostForm;
