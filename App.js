import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { Provider } from "./src/context/BlogContext";
import BlogScreen from "./src/screens/BlogScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import EditScreen from "./src/screens/EditScreen";
const Stack = createStackNavigator();
const MyTheme = {
  colors: {
    background: "#00473e",
    color: "#f2f7f5",
  },
};
export default function App() {
  return (
    <Provider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => {
              return {
                headerTintColor: "#f2f7f5",
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Create");
                    }}
                  >
                    <Ionicons
                      style={{ marginRight: 20 }}
                      name="md-add"
                      size={30}
                      color="#f2f7f5"
                    />
                  </TouchableOpacity>
                ),
              };
            }}
          />
          <Stack.Screen
            name="Blog"
            component={BlogScreen}
            options={({ route, navigation }) => ({
              title: `Blog - ${route.params.id}`,
              headerTintColor: "#f2f7f5",
              headerRight: () => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Edit", { id: route.params.id });
                    }}
                  >
                    <FontAwesome name="pencil" size={30} color="black" />
                  </TouchableOpacity>
                );
              },
            })}
          />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{ headerTintColor: "#f2f7f5" }}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{ headerTintColor: "#f2f7f5" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
