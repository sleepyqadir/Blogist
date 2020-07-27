import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

const BlogCard = ({ title, image, id, navigation }) => {
  const { deleteBlogPost } = useContext(Context);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Blog", { id });
      }}
    >
      <View style={styles.blogCard}>
        <Image
          resizeMode="contain"
          source={{ uri: image }}
          style={styles.blogImg}
        />
        <View style={styles.blogCardContent}>
          <Text style={styles.blogTitle}>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              deleteBlogPost(id);
            }}
            style={styles.blogIcon}
          >
            <MaterialCommunityIcons
              name="delete-variant"
              size={40}
              color="#f2f7f5"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  blogCard: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#00473e",
    width: dimensions.width - 30,
    alignSelf: "center",
    backgroundColor: "#00473e",
    marginTop: 20,
    borderRadius: 2,
  },
  blogCardContent: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
  },
  blogImg: {
    flex: 1,
    height: imageWidth - 140,
  },
  blogTitle: {
    flex: 2,
    color: "#f2f7f5",
    fontSize: 24,
  },
  blogIcon: {
    flex: 1,
    backgroundColor: "#00332c",
    borderRadius: 5,
  },
});
