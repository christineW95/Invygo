import Colors from "../constants/Colors";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { testProps } from "../Utils/utils.helper";
import React from "react";
import { User } from "App/Interfaces/User";
export default function Details({ navigation, route }) {
  const { user } = route?.params;
  const {
    nationality = "",
    address = "",
    age = "",
    numOfGuests = "",
    profession = "",
    dob = "",
  }: User = user;
  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={styles.container}
      {...testProps("Registeration_Container")}
      contentContainerStyle={styles.content}
    >
      <View style={styles.contentWrapper}>
        <Image
          source={require("../../assets/images/person.webp")}
          style={styles.img}
        />
        {/* content */}
        <View style={{ padding: 20 }}>
          {/* header */}
          <View
            style={styles.header}
          >
            <View
              style={styles.leftWrapper}
            >
              <Text
                style={[styles.title,{color:'white'}]}
              >
                Profession
              </Text>
              <Text
                style={[styles.subtitle,{color:'white'}]}
              >
                {profession}
              </Text>
            </View>
            <View
              style={styles.rightWrapper}
            >
              <Text style={styles.title}>Age</Text>
              <Text style={styles.subtitle}>{age}</Text>
            </View>
          </View>

          {/* details */}

          <View
            style={styles.itemWrapper}
          >
            <Text style={styles.title}>
              Nationality
            </Text>

            <Text>{nationality}</Text>
          </View>
          <View
            style={styles.itemWrapper}
          >
            <Text style={styles.title}>
              Date of Birth
            </Text>

            <Text>{dob}</Text>
          </View>
          <View
            style={styles.itemWrapper}
          >
            <Text style={styles.title}>Address</Text>

            <Text>{address}</Text>
          </View>
          <View
            style={styles.itemWrapper}
          >
            <Text style={styles.title}>
              Number of Guests
            </Text>

            <Text>{numOfGuests}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemWrapper:{
    backgroundColor: Colors.light.background,
    padding: 20,
    marginTop: 10,
    borderRadius: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 }, // change this for more shadow
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  rightWrapper:{
    backgroundColor: "lightgreen",
    flex: 1,
    alignItems: "center",
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    padding: 15,
  },
  leftWrapper:{
    backgroundColor: "green",
    flex: 1,
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    padding: 15,
  },
  subtitle:{fontSize: 16, fontWeight: "bold" },
  img:{
    resizeMode: "center",
    alignSelf: "center",
    backgroundColor: "orange",
  },
  title:{fontSize:20,fontWeight:'bold'},
  header:{
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.light.Secondary,
  },
  contentWrapper: { flex: 1 },
  content: {
    backgroundColor: Colors.light.Secondary,
    justifyContent: "center",
    flexGrow: 1,
  },
});
