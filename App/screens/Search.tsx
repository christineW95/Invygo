import Colors from "../constants/Colors";
import { ScrollView, StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { testProps } from "../Utils/utils.helper";
import ScrollableTextInput from "../components/ScrollableSearchBar";
import { useEffect, useState } from "react";
import React from "react";
import ResultList from "../components/SearchResultsList";
import { SearchBy } from "../Helpers/search.helper";
import { HOME_ROUTES } from "../constants/Routes";
import {  getData } from "../services/GetAllUsers";
import { User } from "../Interfaces/User";
import { Key, MOCK_BASE_URL } from "../services/config";

export default function Search({ navigation }: any) {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Array<any>>();
  const [initialData, setInitialData] = useState<Array<User>>();

  useEffect(() => {
    getData(`${MOCK_BASE_URL}key=${Key}`).then((res) => {
      setInitialData(res);
    });
  }, []);

  const onChangeText = (text: string) => {
    setQuery(text);
    if (text !== null) setResults(SearchBy(text.toLowerCase(), initialData));
    else setResults([]);
  };

  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={styles.container}
      {...testProps("Registeration_Container")}
      contentContainerStyle={styles.content}
    >
      <View style={styles.wrapper}>
        <ScrollableTextInput
          value={query}
          onChangeText={onChangeText}
          placeholder={"Write nationality/name here ..."}
        />
        <ResultList
          result={results}
          onPress={(item: User) =>
            navigation.navigate(HOME_ROUTES.Details, { user: item })
          }
          initial={initialData}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper:{ flex: 1, paddingVertical: 30 },
  container: {
    flex: 1,
    backgroundColor: Colors.light.Secondary,
  },
  content: {
    backgroundColor: Colors.light.Secondary,
    justifyContent: "center",
    flexGrow: 1,
  },
});
