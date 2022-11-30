import { categorizeByProfession } from "../services/Reports";

/**
 *
 * @param profeession types
 * @returns length of every part in the type
 */
const getBarLength = (data: Array<string>) => {
  return data.map((item) => categorizeByProfession(item).length);
};

const getGraphData = (profoessions: Array<string>) => {
  const data = getBarLength(profoessions);
  return { labels: profoessions, data };
};
export { getGraphData };
