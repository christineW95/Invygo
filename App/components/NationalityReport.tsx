import Graph from "./Graph";
import { getGraphData } from "../Helpers/nationalities.helper";

export default function NationalitiesReport({ range = 5 }: any) {
  const { labels, data } = getGraphData(range);
  return <Graph labels={labels} data={data} title={"Nationalities"} />;
}
