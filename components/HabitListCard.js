import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HabitListCard = (props) => {
  return (
    <View
      className="flex-row m-1 p-3 rounded-lg w-3/4"
      style={{ backgroundColor: "#333333" }}
    >
      <MaterialCommunityIcons 
        name={props.icon} 
        color={"white"} 
        size={22}
        style={{ 
          backgroundColor: props.backgroundColor, 
          borderRadius: 10, 
          padding: 4,
          overflow: "hidden"
        }}
      />
      <Text className="text-left font-bold text-l text-white ml-5 mt-1.5">
        {props.goal}
      </Text>
    </View>
  );
};

export default HabitListCard;
