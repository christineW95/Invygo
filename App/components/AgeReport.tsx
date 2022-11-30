import { getGraphData } from "../Helpers/age.helper";
import Graph from "./Graph";

export default function AgeReport() {
  const ages = [
    [13, 18],
    [18, 25],
    [25, 80],
  ];
  const { labels, data } = getGraphData(ages);
  return <Graph labels={labels} data={data} title={"Age"} />;
}
