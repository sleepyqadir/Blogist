import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";
import Form from "../components/Form";

const EditScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blog) => {
    return blog.id === id;
  });
  return (
    <Form
      buttonTitle="Edit Post"
      onSubmit={(newBlog) => {
        editBlogPost(newBlog, () => {
          navigation.pop();
        });
      }}
      initialState={blogPost}
    />
  );
};

export default EditScreen;
