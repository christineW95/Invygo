import ProfessionTypes from "../factory/profession.factory";
import { getGraphData } from "../Helpers/profession.helper";
import Graph from "./Graph";

export default function ProfessionReport() {
  const profession = [ProfessionTypes.EMPLOYEE, ProfessionTypes.STUDENT];

  const { labels, data } = getGraphData(profession);
  return <Graph labels={labels} data={data} title={"Profession"} />;
}
