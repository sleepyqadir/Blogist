import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import illustration from "../../assets/add.png";
const Form = ({ buttonTitle, onSubmit, initialState }) => {
  const [title, setTitle] = useState(initialState.title);
  const [content, setContent] = useState(initialState.content);
  const [image, setImage] = useState("../../assets/blog.png");
  const pickFromGallery = async () => {
    const granted = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 2],
        quality: 0.75,
      });
      setImage(data.uri);
    } else {
      Alert("Permission required to access camera");
    }
  };
  console.log(image);
  const pickFromCamera = async () => {
    const granted = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 2],
        quality: 0.75,
      });
      console.log(data);
    } else {
      Alert("Permission required to access gallery");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.illustration} source={illustration} />
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
          pickFromGallery();
        }}
      >
        <View style={styles.ImagePicker}>
          <Text style={styles.ImagePickerText}>
            Pick an image from camera roll
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          const newPost = initialState.id
            ? {
                title,
                content,
                image,
                id: initialState.id,
              }
            : {
                title,
                content,
                image,
              };
          onSubmit(newPost);
        }}
      >
        <View style={styles.formButton}>
          <Text style={styles.formButtonText}>{buttonTitle}</Text>
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
  illustration: {
    flex: 1,
    width: 250,
    alignSelf: "center",
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
    margin: 40,
  },
  formButtonText: {
    fontWeight: "bold",
    color: "#00473e",
    fontSize: 18,
  },
  ImagePicker: {
    backgroundColor: "#475d5b",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  ImagePickerText: {
    color: "#f2f7f5",
  },
});
