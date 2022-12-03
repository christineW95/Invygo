import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Image,
  ActivityIndicator,
} from "react-native";

import { RootTabScreenProps } from "../../types";
import CustomTextInput from "../components/CustomTextInput";
import Colors from "../constants/Colors";
import { testProps } from "../../App/Utils/utils.helper";
import { useState } from "react";
import { generateAgeArray } from "../factory/age.factory";
import React from "react";
import RadioButtonGroup from "../components/RadiobuttonGroup";
import { useGetNationalities } from "../hooks/useNationalities";
import NationalitiesDropdown from "../components/NationalitiesPicker";
import { NationalityItem } from "../Interfaces/Nationalities";
import AgePicker from "../components/DropDown";
import { Datepicker } from "../components/DatePicker";
import ProfessionTypes from "../factory/profession.factory";
import { submitUser } from "../services/SubmitUser";
import { User } from "../Interfaces/User";
import { HOME_ROUTES } from "../constants/Routes";
import { Modal } from "react-native-paper";
import guests from "../factory/guests.factory";
import DropDown from "../components/DropDown";

export default function Registeration({
  navigation,
}: RootTabScreenProps<"Registeration">) {
  const listItems = generateAgeArray();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(true);
  const [name, setName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [date, setDate] = useState<string>(new Date().toLocaleDateString());
  const [selectedAge, setSelectedAge] = React.useState<string>(listItems[10]);
  const [selectedNumGuests, setSelectedNumGuests] = React.useState<number>();
  const [selectedNationality, setSelectedNationality] = React.useState<NationalityItem>();
  const [selectedProfession, setSelectedProfession] = React.useState<string>( ProfessionTypes.EMPLOYEE );
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

  const { nationalities } = useGetNationalities("https://api.first.org/data/v1/countries" );

  const onChangeText = (text: string) => setName(text);
  const onChangeAddress = (text: string) => setAddress(text);
  const onChangeDate = (selectedDate: Date) => setDate(selectedDate);
  const onAgeSelect = (index: number) => setSelectedAge(listItems[index]);
  const onNationalitySelect = (nationality: NationalityItem) => setSelectedNationality(nationality);
  const onGuestsSelect = (index: number) => setSelectedNumGuests(guests[index]);
  const onPress = async () => {
    setIsSubmitSuccess(false);
    const user: User = {
      name,
      age: selectedAge,
      numOfGuests: selectedNumGuests?.toString(),
      address,
      nationality: selectedNationality?.country,
      profession: selectedProfession,
      dob: date.toString(),
    };
    const { success } = await submitUser(user);
    if (success) {
      setIsSubmitSuccess(true);
      navigation.navigate(HOME_ROUTES.Search);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../assets/images/logo.jpeg")}
        resizeMode="center"
        style={styles.logo}
        {...testProps("Logo_Component")}
      />
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        {...testProps("Registeration_Container")}
        contentContainerStyle={styles.content}
      >
        <View style={styles.contentWrapper}>
          <CustomTextInput
            value={name}
            label={"Name"}
            maxLength={20}
            onChangeText={onChangeText}
            placeholder={"Enter your username"}
          />

          <DropDown
            label={"Age"}
            placeholder={"Enter your age"}
            listItems={listItems}
            onSelect={onAgeSelect}
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
            onSelect={onNationalitySelect}
            selected={selectedNationality}          />
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
            listItems={guests}
            onSelect={onGuestsSelect}
            selected={selectedNumGuests}
          />
          <Button
            onPress={onPress}
            title="Submit"
            color={"orange"}
            {...testProps("Submit_Button")}
          />
          <Modal visible={!isSubmitSuccess} style={styles.loadingModal}>
            <ActivityIndicator color={"white"} size="large" />
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: Colors.light.Secondary },
  container: {
    flex: 1,
  },
  logo: { alignSelf: "center", justifyContent: "center" },
  content: {
    backgroundColor: Colors.light.Secondary,
    justifyContent: "center",
    paddingVertical: 30,
    flexGrow: 1,
  },
  loadingModal: { alignItems: "center", justifyContent: "center", flex: 1 },
  contentWrapper: { flex: 1 },
});
