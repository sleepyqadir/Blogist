import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";

const BlogScreen = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext(Context);

  const blogPost = state.find((blog) => {
    return blog.id === id;
  });

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({});
