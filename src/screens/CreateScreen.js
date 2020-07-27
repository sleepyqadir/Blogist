import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
import Form from "../components/Form";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <Form
      onSubmit={(newPost) => {
        addBlogPost(newPost, () => {
          navigation.navigate("Home");
        });
      }}
      buttonTitle="Add blog"
      initialState={{ title: "", content: "" }}
    />
  );
};

export default CreateScreen;
