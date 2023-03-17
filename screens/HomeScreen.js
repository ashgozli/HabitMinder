import { View, Text } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabMenu from "../components/TabMenu";

const HomeScreen = () => {
  const user = {
    name: "Elon Musk",
  };

  const [key, setKey] = useState("home");

  return (
    <View className="flex-1  justify-center items-center bg-black">
      <Text className="text-white flex text-2xl">Home</Text>
    </View>
  );
};

export default HomeScreen;
