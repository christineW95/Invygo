import { testProps } from "../Utils/utils.helper";
import React from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import SearchCard from "./SearchCard";
import { User } from "../../App/Interfaces/User";

type ResultProps = {
  result: Array<User>;
  onPress: Function;
  initial: Array<User>;
};
function ResultList({ result, onPress, initial }: ResultProps) {
  const isResultsEmpty = result?.length > 0;
  const data = isResultsEmpty ? result : initial;
  const RenderItem = ({ item }: any) => (
    <SearchCard {...item} onPress={() => onPress(item)} />
  );
  const RenderEmptyComponent = () => (
    <ActivityIndicator color={"green"} size={"large"} />
  );
  const Header = () => (
    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
      {!isResultsEmpty ? "Suggestions" : "Your Results"}
    </Text>
  );
  return (
    <>
      <FlatList
        ListEmptyComponent={<RenderEmptyComponent />}
        data={data}
        ListHeaderComponent={<Header />}
        extraData={result}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={({ index }) => index}
        contentInsetAdjustmentBehavior="automatic"
        indicatorStyle={"white"}
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        style={{ margin: 20 }}
        {...testProps("Search_Result_FlatList")}
      />
    </>
  );
}

export default ResultList;
