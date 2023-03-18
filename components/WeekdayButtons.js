import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { CheckBox } from "react-native-elements";

const WeekdayButtons = ({ days, setDays }) => {
  const handleItemSelect = (item) => {
    if (days.includes(item)) {
      setDays(days.filter((i) => i !== item));
    } else {
      setDays([...days, item]);
    }
    console.log(days);
  };
  const daysArray = [
    { label: "Mon", value: "Mon" },
    { label: "Tue", value: "Tue" },
    { label: "Wed", value: "Wed" },
    { label: "Thu", value: "Thu" },
    { label: "Fri", value: "Fri" },
    { label: "Sat", value: "Sat" },
    { label: "Sun", value: "Sun" },
  ];

  const schedule = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <View className="flex-row justify-between w-1/2">
      {schedule.map((day) => (
        <TouchableOpacity
          key={day}
          className={`rounded-md bg-gray-700 px-2 py-1 m-1 ${
            days.includes(day) ? "bg-purple-400" : ""
          }`}
          onPress={() => handleItemSelect(day)}
        >
          <Text className="text-white font-semibold">{day}</Text>
        </TouchableOpacity>
        // <CheckBox
        //   style={{ backgroundColor: "red" }}
        //   key={day.value}
        //   title={day.label}
        //   checked={days.includes(day.value)}
        //   onPress={() => handleItemSelect(day.value)}
        // />
      ))}
    </View>
  );
};

export default WeekdayButtons;
