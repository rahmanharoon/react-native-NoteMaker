import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const ID = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === ID);

  return (
    <BlogPostForm
      label1="Edit Note Title"
      label2="Edit Note Content"
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(ID, title, content, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;
