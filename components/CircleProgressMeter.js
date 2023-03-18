import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CircleProgressMeter = (props) => {
  return (
    <View className="flex flex-col justify-center items-center m-2">
      <AnimatedCircularProgress
        size={100}
        width={5}
        fill={props.fill}
        tintColor={props.tintColor}
        onAnimationComplete={() => {}}
        backgroundColor="#3d5875"
      />
      <View
        className="justify-center items-center"
        style={{
          width: 80,
          height: 80,
          backgroundColor: props.backgroundColor,
          borderRadius: 100,
          position: "absolute",
          left: 10,
          top: 10,
        }}
      >
        <MaterialCommunityIcons
          name={props.iconName}
          color={"white"}
          size={40}
        />
      </View>
      <Text className="font-bold text-white">{props.title}</Text>
    </View>
  );
};

export default CircleProgressMeter;
