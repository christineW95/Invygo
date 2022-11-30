import Colors from "../constants/Colors";
import { ScrollView, StyleSheet, View } from "react-native";

import { testProps } from "../Utils/utils.helper";
import AgeReport from "../components/AgeReport";
import React from "react";
import ProfessionReport from "../components/ProfessionReport";
import NationalitiesReport from "../components/NationalityReport";

export default function Reports() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.Secondary }}>
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.container}
        {...testProps("Registeration_Container")}
        contentContainerStyle={styles.content}
      >
        <AgeReport />
        <ProfessionReport />
        <NationalitiesReport />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  content: {
    backgroundColor: Colors.light.Secondary,
    justifyContent: "center",
    paddingVertical: 30,
    flexGrow: 1,
  },
});
