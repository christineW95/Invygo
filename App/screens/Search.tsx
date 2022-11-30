import Colors from "../constants/Colors";
import { ScrollView, StyleSheet } from "react-native";

import {  View } from "../components/Themed";
import { testProps } from "../Utils/utils.helper";
import ScrollableTextInput from "../components/ScrollableSearchBar";
import { useState } from "react";
import React from "react";
import ResultList from "../components/SearchResultsList";
import { SearchBy } from "../Helpers/search.helper";
import { HOME_ROUTES } from "../constants/Routes";

export default function Search({navigation}) {
  const [query, setQuery] = useState<string>('')
  const [results, setResults] = useState<Array<any>>()
  const onChangeText=(text:string)=>{
    setQuery(text)
    if(text !==null)
        setResults(SearchBy('name',text.toLowerCase()))
    else
      setResults([])
  }
  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={styles.container}
      {...testProps("Registeration_Container")}
      contentContainerStyle={[styles.content, { flexGrow: 1 }]}
    >

    
      <View style={{ flex: 1, paddingVertical: 30,}}>
        <ScrollableTextInput value={query} onChangeText={onChangeText} placeholder={'Write nationality/name here ...'}/>
        <ResultList result={results} onPress={(item)=>navigation.navigate(HOME_ROUTES.Details,{user:item})}/>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.Secondary,

  },
  content: {
    backgroundColor: Colors.light.Secondary,
    justifyContent: "center",
  },
});
