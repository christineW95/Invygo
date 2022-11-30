import { StyleSheet, ScrollView, Button, View, Image } from "react-native";

import { RootTabScreenProps } from "../../types";
import CustomTextInput from "../components/CustomTextInput";
import Colors from "../constants/Colors";
import { testProps } from "../../App/Utils/utils.helper";
import { useState } from "react";
import { generateAgeArray } from "../factory/age.factory";
import React from "react";
import RadioButtonGroup from "../components/RadiobuttonGroup";
import ProfessionTypes from "../factory/profession.factory";
import { useGetNationalities } from "../hooks/useNationalities";
import NationalitiesDropdown from "../components/NationalitiesPicker";
import { NationalityItem } from "../Interfaces/Nationalities";
import AgePicker from "../components/AgePicker";
import { Datepicker } from "../components/DatePicker";

export default function Registeration({
  navigation,
}: RootTabScreenProps<"Registeration">) {
  const listItems = generateAgeArray();
  const guestsList = [0, 1, 2];
  const [name, setName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [date, setDate] = useState<Date>(new Date());
  const [selectedAge, setSelectedAge] = React.useState<string>(listItems[10]);
  const [selectedNumGuests, setSelectedNumGuests] = React.useState<number>();
  const [selectedNationality, setSelectedNationality] =
    React.useState<NationalityItem>();
  const [selectedProfession, setSelectedProfession] = React.useState<string>(
    ProfessionTypes.EMPLOYEE
  );
  const ProfessionList = [
    {
      label: ProfessionTypes.EMPLOYEE,
      value: ProfessionTypes.EMPLOYEE,
      onSelect: () => setSelectedProfession(ProfessionTypes.EMPLOYEE),
      status:
        selectedProfession == ProfessionTypes.EMPLOYEE
          ? "checked"
          : "unchecked",
    },
    {
      label: ProfessionTypes.STUDENT,
      value: ProfessionTypes.STUDENT,
      onSelect: () => setSelectedProfession(ProfessionTypes.STUDENT),
      status:
        selectedProfession == ProfessionTypes.STUDENT ? "checked" : "unchecked",
    },
  ];
  const { loading, nationalities } = useGetNationalities(
    "https://api.first.org/data/v1/countries"
  );

  //TODO:don't allow whitespaces
  const onChangeText = (text: string) => setName(text);
  const onChangeAddress = (text: string) => setAddress(text);
  const onChangeDate = (selectedDate: Date) => {
    setDate(selectedDate);
  };
  return (
    <View style={{flex:1,backgroundColor: Colors.light.Secondary}}>
<Image source={require('../../assets/images/logo.jpeg')} resizeMode='center' style={{alignSelf:'center',justifyContent:'center'}}/>
    <ScrollView
      nestedScrollEnabled={true}
      style={styles.container}
      {...testProps("Registeration_Container")}
      contentContainerStyle={[styles.content, { flexGrow: 1 }]}
    >

      <View style={{ flex: 1 }}>
        <CustomTextInput
          value={name}
          label={"Name"}
          maxLength={20}
          onChangeText={onChangeText}
          placeholder={"Enter your username"}
        />

        <AgePicker
          label={"Age"}
          placeholder={"Enter your age"}
          listItems={listItems}
          onSelect={(index: number) => setSelectedAge(listItems[index])}
          selected={selectedAge}
        />

        <Datepicker
          label="Date of Birth"
          value={date}
          onChange={onChangeDate}
        />

        <RadioButtonGroup label="Profession" listItems={ProfessionList} />
        <NationalitiesDropdown
          label={"Locality"}
          listItems={nationalities}
          onSelect={(nationality: NationalityItem) =>
            setSelectedNationality(nationality)
          }
          selected={selectedNationality}
        />
        <CustomTextInput
          value={address}
          label={"Address"}
          maxLength={50}
          numberOfLines={2}
          onChangeText={onChangeAddress}
          placeholder={"Enter your address"}
        />

        <AgePicker
          label={"Number of Guests"}
          placeholder={"Select number of guests"}
          listItems={guestsList}
          onSelect={(index: number) => setSelectedNumGuests(guestsList[index])}
          selected={selectedNumGuests}
        />
        <Button
          title="Submit"
          color={"orange"}
          {...testProps("Submit_Button")}
        />
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
