import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AboutPage from "./component/screens/About.js";
import HomeScreen from "./component/screens/Home";
import SearchPage from './component/screens/Search.js';

const Stack = createStackNavigator();

const App = () => {
  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={AboutPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;