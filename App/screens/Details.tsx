import Colors from "../constants/Colors";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { testProps } from "../Utils/utils.helper";
import React from "react";
import { User } from "../Interfaces/User";
import DetailsCard from "../components/DetailsCard";
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
      {...testProps("Details_Container")}
      contentContainerStyle={styles.content}
    >
      <View style={styles.contentWrapper}>
        <Image
        {...testProps('Logo')}
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
              {...testProps('Profession_value')}
                style={[styles.subtitle,{color:'white'}]}
              >
                {profession}
              </Text>
            </View>
            <View
              style={styles.rightWrapper}
            >
              <Text style={styles.title}>Age</Text>
             
              <Text  {...testProps('Age_value')} style={styles.subtitle}>{age}</Text>
            </View>
          </View>

          {/* details */}
          <DetailsCard label="Nationality" value={nationality}/>
          <DetailsCard label="Date of Birth" value={dob}/>
          <DetailsCard label="Address" value={address}/>
          <DetailsCard label=" Number of Guests" value={numOfGuests}/>
         
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
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
