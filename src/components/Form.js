import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Form = ({ buttonTitle, onSubmit, initialState }) => {
  const [title, setTitle] = useState(initialState.title);
  const [content, setContent] = useState(initialState.content);
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Enter Title:</Text>
      <TextInput
        placeholder="title"
        style={styles.formInput}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.formLabel}>Enter Content:</Text>
      <TextInput
        placeholder="content"
        multiline={true}
        numberOfLines={4}
        style={[styles.formInput, styles.formInputContent]}
        value={content}
        onChangeText={setContent}
      />
      <TouchableOpacity
        onPress={() => {
          const newPost = initialState.id
            ? {
                title,
                content,
                id: initialState.id,
              }
            : {
                title,
                content,
              };
          onSubmit(newPost);
        }}
      >
        <View style={styles.formButton}>
          <Text styles={styles.formButtonText}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f7f5",
  },
  formLabel: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    color: "#00473e",
  },
  formInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    margin: 10,
    color: "#475d5b",
  },
  formInputContent: {
    height: 150,
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
  formButton: {
    backgroundColor: "#faae2b",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  formButtonText: {
    color: "#00473e",
    fontSize: 18,
  },
});
