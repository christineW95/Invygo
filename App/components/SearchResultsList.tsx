import { testProps } from '../Utils/utils.helper'
import React from 'react'
import { FlatList, Text } from 'react-native'
import SearchCard from './SearchCard'


type ResultProps = {
  result: Array<Object>
  onPress:Function
}
function ResultList({ result ,onPress}: ResultProps) {
  const Header = () => result?.length > 0 && <Text style={{fontSize:20,fontWeight:'bold'}} >Your Results</Text>
  const RenderItem = ({ item }: any) => <SearchCard {...item} onPress={()=>onPress(item)} />
  return (
    <>
      <FlatList
        data={result}
        ListHeaderComponent={<Header />}
        extraData={result}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={({ index }) => index}
        contentInsetAdjustmentBehavior="automatic"
        indicatorStyle={'white'}
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        showsVerticalScrollIndicator={true}
        style={{margin:20}}
        {...testProps('Search_Result_FlatList')}
      />
    </>
  )
}

export default ResultList
