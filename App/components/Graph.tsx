import Colors from "../constants/Colors";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { testProps } from "../Utils/utils.helper";
import BarGraph from "./BarChart";

export default function Graph({ labels, data, title }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.Secondary }}>
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.container}
        {...testProps("Registeration_Container")}
        contentContainerStyle={[styles.content, { flexGrow: 1 }]}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 24, margin: 10, fontWeight: "bold" }}>
            {title}
          </Text>
          <BarGraph labels={labels} data={data} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    backgroundColor: Colors.light.Secondary,
    justifyContent: "center",
    paddingVertical: 30,
  },
});
