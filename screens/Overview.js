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
          {/* Step 1: Add Daily Goals title and description */}
          {/* ... */}

          {/* Step 2: Add CircleProgressMeter components for each habit */}
          {/* ... */}

          {/* Step 3: Add progress bar and percentage */}
          {/* ... */}
        </View>
        <View className="w-full px-8 pt-4">
          {/* Step 4: Add Categories title */}
          {/* ... */}
        </View>
        <View className="flex flex-row flex-wrap items-center justify-center">
          {/* Step 5: Add HabitCard components for each category */}
          {/* ... */}
        </View>
      </View>
    </ScrollView>
  );
}

export default Overview;
