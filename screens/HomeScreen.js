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
    <View className="flex-1 bg-black">
      <View className="p-4 px-8">
        <Text className="font-extrabold text-[40px] text-white">Hello 👋</Text>
        <Text className="font-extrabold text-[40px] text-white">
          {user.name}
        </Text>
      </View>
      <TabMenu />
    </View>
  );
};

export default HomeScreen;
