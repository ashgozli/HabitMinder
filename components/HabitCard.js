import React from "react";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HabitCard = (props) => {
  return (
    <View
      className="flex flex-col max-w-[40%] m-4 p-4 rounded-lg"
      style={{ backgroundColor: "#333333" }}
    >
      <MaterialCommunityIcons name={props.icon} color={"white"} size={20} />
      <Text className="text-left text-sm text-zinc-500">{props.time} Goal</Text>
      <Text className="text-left font-medium text-xl text-white">
        {props.goal}
      </Text>
      <View className="flex flex-row justify-center items-center">
        <Text className="font-bold text-white">{props.progress * 100}%</Text>
        <Progress.Bar progress={props.progress} width={100} />
      </View>
    </View>
  );
};

export default HabitCard;
