import Colors from "../constants/Colors";
import { ScrollView, StyleSheet,View } from "react-native";

import { testProps } from "../Utils/utils.helper";
import BarGraph from "../components/BarChart";
import DropDown from "../components/AgePicker";
import { useState } from "react";
import ProfessionTypes from "../factory/profession.factory";

export default function Reports() {
  const ages=['13-18','18-25','+25']
  const profession=[ProfessionTypes.EMPLOYEE,ProfessionTypes.STUDENT]
  const [selectedAgeValue, setselectedAgeValue] = useState<string>()
  const [selectedProfValue, setselectedProfValue] = useState<string>()
  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.Secondary }}>
   
    <ScrollView
      nestedScrollEnabled={true}
      style={styles.container}
      {...testProps("Registeration_Container")}
      contentContainerStyle={[styles.content, { flexGrow: 1 }]}
    >
      <View style={{ flex: 1 }}>
        <DropDown listItems={ages} label='Age' selected={selectedAgeValue} placeholder={'Please Select ...'} onSelect={(index:number)=>setselectedAgeValue(ages [index])}/>
        <BarGraph/>
        </View>
        <View style={{ flex: 1 }}>
        <DropDown listItems={profession} label='Profession' selected={selectedProfValue} placeholder={'Please Select ...'} onSelect={(index:number)=>setselectedProfValue(profession [index])}/>
        <BarGraph/>
        </View>
        <View style={{ flex: 1 }}>
        <DropDown listItems={ages} label='Nationalities'  placeholder={'Please Select ...'} onSelect={(index:number)=>setselectedProfValue(ages [index])}/>
        <BarGraph/>
        </View>
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
  },
});
