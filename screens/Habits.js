import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import HabitListCard from "../components/HabitListCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ScrollView } from "react-native";

const Habits = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    console.log("searching");
  };

  let dataArray = {
    startDate: "",
    endDate: "",
    title: "",
    selectedDays: [],
  };
  useEffect(() => {
    //Step - 4 data layer
  }, []);

  return (
    <ScrollView>
      <View className="flex-1 bg-black">
        <View className="">
          <Text className="font-bold text-[40px] my-2 text-white p-4 px-8">
            Habit Hub
          </Text>
          <View className="flex mt-4 flex-col justify-center items-center">
            {/* <TextInput
        className='bg-gray-700 p-2 rounded-lg h-14 w-3/4'
        placeholder="Search..."
        placeholderTextColor='grey'
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <AntDesign name="search1" size={24} color="white" /> */}
            <View
              style={{
                position: "relative",
                backgroundColor: "#333",
                borderRadius: 10,
                padding: 10,
                width: 300,
                height: 60,
              }}
            >
              <AntDesign
                name="search1"
                size={24}
                color="grey"
                style={{ position: "absolute", left: 10, top: 18 }}
              />
              <TextInput
                style={{ color: "white", paddingLeft: 40, paddingTop: 10 }}
                placeholder="Search"
                placeholderTextColor="grey"
                value={searchTerm}
                onChangeText={handleSearch}
              />
            </View>

            <View className="flex flex-row justify-center items-center mb-4 mt-12">
              <TouchableOpacity className="bg-blue-500 px-8 py-2 rounded-full ml-2">
                <Text className="text-white font-bold">All</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-4 py-2 rounded-lg ml-2">
                <Text className="text-white font-bold">Favorites</Text>
              </TouchableOpacity>
            </View>
            <HabitListCard
              icon="book-open"
              goal='Read "The Lean Startup"'
              backgroundColor="blue"
            />
            <HabitListCard
              icon="bookmark"
              goal="Fix landing page"
              backgroundColor="green"
            />
            <HabitListCard
              icon="check"
              goal="Share prototype with team"
              backgroundColor="purple"
            />
            <HabitListCard
              icon="message"
              goal="Reply to Richard"
              backgroundColor="pink"
            />
            <HabitListCard
              icon="check"
              goal="Finalize pitch deck"
              backgroundColor="purple"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Habits;
