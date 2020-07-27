import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";

const BlogScreen = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext(Context);

  const blogPost = state.find((blog) => {
    return blog.id === id;
  });
  console.log(blogPost.image);
  return (
    <View style={styles.container}>
      <Image style={styles.bannerImage} source={{ uri: blogPost.image }} />
      <View style={styles.blogContent}>
        <Text style={styles.blogTitle}>{blogPost.title.toUpperCase()}</Text>
        <Text style={styles.blogDesc}>{blogPost.content}</Text>
      </View>
    </View>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f7f5",
  },
  bannerImage: {
    height: 200,
    borderWidth: 3,
    borderColor: "#00473e",
  },
  blogContent: {
    flex: 1,
    borderWidth: 3,
    borderColor: "#00473e",
  },
  blogTitle: {
    fontSize: 32,
    alignSelf: "center",
    fontWeight: "bold",
  },
  blogDesc: {
    margin: 10,
    fontSize: 18,
  },
});
