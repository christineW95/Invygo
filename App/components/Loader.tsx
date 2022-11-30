import { ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { Modal } from "react-native-paper";

export default function Loader(visible: boolean) {
  return (
    <Modal visible={visible} style={styles.container}>
      <ActivityIndicator color={"white"} size="large" />
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "flex-start", flex: 1 },
});
