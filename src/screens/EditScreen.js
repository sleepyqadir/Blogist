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
    <View>
      <Text>Edit -{blogPost.title}</Text>
      <Form
        buttonTitle="Edit Post"
        onSubmit={(newBlog) => {
          editBlogPost(newBlog, () => {
            navigation.pop();
          });
        }}
        initialState={blogPost}
      />
    </View>
  );
};

export default EditScreen;
