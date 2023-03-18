import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import HabitListCard from "../components/HabitListCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";
/**
 * Import the necessary Firebase and Firestore libraries
 */

const Habits = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    console.log("searching");
  };

  /*
   * Listen to updates on the "habits" collection in Firebase and update the state with the new data
   * This is a listener that will run every time the data in the collection changes
   */

  useEffect(() => {
    /**
    * Step 1. 
    * Call the onSnapshot method on the firestore collection "habits"
    * Pass the database instance and collection name as parameters to collection function
    * The onSnapshot method takes a callback function that will be called whenever there is any change in the firestore collection

    * Step 2.
    * Looping through each document of the collection
    * Pushing an object to the newData array
    * 
    * Step 3.
    * Setting the state variable data to the newData array
    */
    return () => unsubscribe();
  }, []);

  return (
    <ScrollView>
      <View className="flex-1 bg-black">
        <View className="">
          <Text className="font-bold text-[40px] my-2 text-white p-4 px-8">
            Habit Hub
          </Text>
          <View className="flex mt-4 flex-col justify-center items-center">
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
            {
              // Step 4. Loop through the data array and render a HabitListCard for each item
            }
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Habits;
