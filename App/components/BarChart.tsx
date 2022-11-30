import { Dimensions, StyleSheet, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

type ChartPropTypes = {};

const BarGraph = (props: ChartPropTypes) => {
  return (
    <View style={styles.wrapper}>
      <BarChart
        data={{
          labels: props.labels,
          datasets: [
            {
              data: props.data,
            },
          ],
        }}
        width={Dimensions.get("screen").width - 10}
        height={220}
        yAxisSuffix=" Per"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0,
          width: 5,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 10,
          padding: 5,
        }}
      />
    </View>
  );
};

export default BarGraph;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
