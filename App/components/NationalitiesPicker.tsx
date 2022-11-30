import { StyleSheet, View } from "react-native";
import React from "react";
import { List, ListAccordionProps } from "react-native-paper";
import Label from "./Label";
import { testProps } from "../Utils/utils.helper";
import { NationalityItem } from "../Interfaces/Nationalities";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

type DropdownTypes = {
  props?: ListAccordionProps;
  label?: string;
  listItems: Array<any>;
  selected?: NationalityItem;
  onSelect: Function;
  style: object;
};

const NationalitiesDropdown = (props: DropdownTypes) => {
  const { label, listItems, selected, onSelect, style } = props;
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handlePress = () => setExpanded(!expanded);

  const onPress = (index: NationalityItem) => {
    onSelect(index);
    handlePress();
  };
  const RenderList = () => (
    <FlatList
      data={listItems}
      style={{ height: 200 }}
      keyExtractor={({ _, index }) => index}
      renderItem={({ item }) => {
        return (
          <List.Item
            {...testProps("AccordionItem_Component")}
            title={item.country}
            onPress={() => onPress(item)}
            key={Math.random().toFixed(2)}
          />
        );
      }}
    />
  );

  return (
    <View style={styles.wrapper}>
      <Label label={label ?? label} style={{ color: "black" }} />
      <View style={styles.container}>
        <List.Accordion
          {...testProps("Accordion_Component")}
          expanded={expanded}
          style={[styles.accordion, style]}
          title={selected?.country || "Select your Nationality"}
          titleNumberOfLines={2}
          onPress={handlePress}
          titleStyle={styles.title}
          key={Math.random().toFixed(2)}
          {...props}
        >
          <RenderList />
        </List.Accordion>
      </View>
    </View>
  );
};

export default NationalitiesDropdown;
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
    shadowOpacity: 0.4,
    borderColor: "black",
    elevation: 5,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    marginLeft: 5,
  },
});
