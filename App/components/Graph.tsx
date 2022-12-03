import Colors from "../constants/Colors";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { testProps } from "../Utils/utils.helper";
import BarGraph from "./BarChart";

export default function Graph({ labels, data, title }: any) {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.container}
        {...testProps("Graph_Container")}
        contentContainerStyle={styles.content}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            {title}
          </Text>
          <BarGraph labels={labels} data={data} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{ flex: 1, backgroundColor: Colors.light.Secondary },
  container: {
    flex: 1,
  },
  title:{ fontSize: 24, margin: 10, fontWeight: "bold" },
  content: {
    backgroundColor: Colors.light.Secondary,
    justifyContent: "center",
    paddingVertical: 30,
    flexGrow: 1
  },
});
