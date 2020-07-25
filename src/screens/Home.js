import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogCard from "../components/BlogCard";
const Home = ({ navigation }) => {
  const { state} = useContext(Context);
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        renderItem={({ item }) => {
          return (
            <BlogCard
              title={item.title}
              id={item.id}
              key={item.id}
              navigation={navigation}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f2f7f5",
  },
});
