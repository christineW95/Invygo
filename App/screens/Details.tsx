import Colors from "../constants/Colors";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

import { View } from "../components/Themed";
import { testProps } from "../Utils/utils.helper";
import React from "react";

export default function Details({ navigation,route }) {
const{user}=route?.params
  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={styles.container}
      {...testProps("Registeration_Container")}
      contentContainerStyle={styles.content}
    >
      <View style={{ flex: 1, paddingVertical: 30 }}>

        <Image
          source={require("../../assets/images/person.webp")}
          style={{
            resizeMode: "center",
            alignSelf: "center",
            backgroundColor: "orange",
          }}
        />
        {/* content */}
        <View style={{ padding:20}}>

          {/* header */}
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            <View style={{ backgroundColor: "green" ,flex:1,alignItems:'center',borderBottomLeftRadius:15,borderTopLeftRadius:15,padding:15}}>
              <Text style={{ color: "white" ,fontSize:20,fontWeight:'bold'}}>Number of Guests</Text>
              <Text style={{ color: "white",fontSize:18,fontWeight:'bold',}}>2</Text>
            </View>
            <View style={{ backgroundColor: "lightgreen",flex:1,alignItems:'center',borderBottomRightRadius:15,borderTopRightRadius:15,padding:15 }}>
            <Text style={{ fontSize:20,fontWeight:'bold'}}>Age</Text>
              <Text style={{ fontSize:18,fontWeight:'bold'}}>{user.age}</Text>
            </View>
          </View>

          {/* details */}

          <View style={{
              backgroundColor: Colors.light.background,
              padding: 20,
              marginTop: 10,
              borderRadius: 15,
              shadowColor: "grey",
              shadowOffset: { width: 0, height: 0 }, // change this for more shadow
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 5,
          }}>
              <Text style={{ fontSize:20,fontWeight:'bold'}}>Nationality</Text>

              <Text>Egypt</Text>
          </View>
          <View style={{
              backgroundColor: Colors.light.background,
              padding: 20,
              marginTop: 10,
              borderRadius: 15,
              shadowColor: "grey",
              shadowOffset: { width: 0, height: 0 }, // change this for more shadow
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 5,
          }}>
              <Text style={{ fontSize:20,fontWeight:'bold'}}>Date of Birth</Text>

              <Text>20/11/2022</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.Secondary,
  },
  content: {
    backgroundColor: Colors.light.Secondary,
    justifyContent: "center",
    flexGrow: 1,
  },
});
