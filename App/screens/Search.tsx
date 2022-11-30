import Colors from "../constants/Colors";
import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { testProps } from "../Utils/utils.helper";

export default function Search() {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={styles.container}
      {...testProps("Registeration_Container")}
      contentContainerStyle={[styles.content, { flexGrow: 1 }]}
    >

      <View style={{ flex: 1 }}>
      {/* <IconButton iconName="md-search" size={32} color="green" /> */}
    </View>
    </ScrollView>
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
