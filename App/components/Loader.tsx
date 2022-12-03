import { ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { Modal } from "react-native-paper";
import { testProps } from "../Utils/utils.helper";

export default function Loader(visible: boolean) {
  return (
    <Modal visible={visible} style={styles.container}  {...testProps('Modal_Component')}>
      <ActivityIndicator color={"white"} size="large" {...testProps('Loader_Component')} />
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "flex-start", flex: 1 },
});
