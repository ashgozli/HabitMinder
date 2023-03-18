import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Habits from "./screens/Habits";
import Settings from "./screens/Settings";
import AddHabits from "./screens/AddHabits";

const Stack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Habits" component={Habits} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AddHabits" component={AddHabits} />
    </Stack.Navigator>
  );
};

const HabitsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Habits" component={Habits} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AddHabits" component={AddHabits} />
    </Stack.Navigator>
  );
};

const AddHabitsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddHabits" component={AddHabits} />
      <Stack.Screen name="Habits" component={Habits} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export { HomeScreenStack, HabitsStack, AddHabitsStack };
