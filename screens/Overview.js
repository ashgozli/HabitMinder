import React from "react";
import { Text, View, ScrollView } from "react-native";
import CircleProgressMeter from "../components/CircleProgressMeter";
import * as Progress from "react-native-progress";
import HabitCard from "../components/HabitCard";

function Overview() {
  return (
    <ScrollView>
      <View className="flex-1 items-center bg-black">
        <View
          className="flex flex-col max-w-[85%] mt-4 p-4 rounded-lg"
          style={{ backgroundColor: "#333333" }}
        >
          <Text className="text-left font-extrabold text-2xl text-white">
            Daily Goals
          </Text>
          <Text className="text-left text-sm text-zinc-500">
            Here you can see your top priority daily tasks!
          </Text>
          <View className="flex flex-row justify-center items-center p-4">
            <CircleProgressMeter
              fill={75}
              tintColor="#e740f0"
              backgroundColor="#453545"
              iconName="run-fast"
              title={"Running"}
            />
            <CircleProgressMeter
              fill={85}
              tintColor="#8749f7"
              backgroundColor="#403647"
              iconName="shoe-print"
              title={"Steps"}
            />
            <CircleProgressMeter
              fill={100}
              tintColor="#ec9751"
              backgroundColor="#453545"
              iconName="book-open-page-variant"
              title={"Reading"}
            />
          </View>
          <View className="flex flex-row justify-center items-center">
            <Text className="font-bold text-white">87%</Text>
            <Progress.Bar progress={0.87} width={200} />
          </View>
        </View>
        <View className="w-full px-8 pt-4">
          <Text className="text-left font-extrabold text-2xl mt-4 text-white">
            Categories
          </Text>
        </View>
        <View className="flex flex-row flex-wrap items-center justify-center">
          <HabitCard
            time={"Yearly"}
            goal={"Health"}
            icon={"meditation"}
            progress={0.3}
          />
          <HabitCard
            time={"Monthly"}
            goal={"Coding"}
            icon={"xml"}
            progress={0.7}
          />
          <HabitCard
            time={"Daily"}
            goal={"Water"}
            icon={"water"}
            progress={1}
          />
          <HabitCard
            time={"Monthly"}
            goal={"Reading"}
            icon={"book-open-page-variant"}
            progress={0.5}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default Overview;
