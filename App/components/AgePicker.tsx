import { StyleSheet, View } from "react-native";
import React from "react";
import { List, ListAccordionProps } from "react-native-paper";
import Label from "./Label";
import { testProps } from "../Utils/utils.helper";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

type DropDownTypes = {
  props?: ListAccordionProps;
  label?: string;
  listItems: Array<any>;
  selected?: any;
  onSelect: Function;
  placeholder: string;
};

const DropDown = (props: DropDownTypes) => {
  const { label, placeholder, listItems, selected, onSelect } = props;
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handlePress = () => setExpanded(!expanded);

  const onPress = (index: number) => {
    onSelect(index);
    handlePress();
  };
  const RenderList = () => (
    <FlatList
      data={listItems}
      keyExtractor={({ item, index }) => index}
      style={{ height: 200 }}
      renderItem={({ item, index }) => (
        <List.Item
          {...testProps("AccordionItem_Component")}
          title={item}
          onPress={() => onPress(index)}
        />
      )}
    />
  );

  return (
    <View style={styles.wrapper}>
      <Label label={label ?? label} style={{ color: "black" }} />
      <View style={styles.container}>
        <List.Accordion
          {...testProps("Accordion_Component")}
          expanded={expanded}
          style={[styles.accordion, props?.style]}
          title={selected || placeholder}
          titleNumberOfLines={2}
          onPress={handlePress}
          titleStyle={styles.title}
          {...props}
        >
          <RenderList />
        </List.Accordion>
      </View>
    </View>
  );
};

export default DropDown;
const styles = StyleSheet.create({
  accordion: {
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    paddingVertical: 12,
  },
  icon: { tintColor: "purple" },
  wrapper: {
    margin: 30,
  },
  container: {
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    borderColor: "black",
    elevation: 5,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    marginLeft: 5,
  },
});
