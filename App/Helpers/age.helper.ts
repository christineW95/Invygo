import { categorizeByAge } from "../services/Reports";
/**
 * @param [min,max]
 * @returns range of numbers from min to max
 */
const generateGraphData = (array: Array<any>) =>
  array.map((range) => {
    const start = range[0];
    const end = range[1];
    return [...Array(end - start + 1).keys()].map((x) => x + start);
  });
/**
 *
 * @param range of numbers
 * @returns length of every part in the range
 */
const getBarLength = (range: Array<number>) => {
  return generateGraphData(range).map((item) => categorizeByAge(item).length);
};

const getGraphData = (ages: Array<any>) => {
  const labels = ages.map((item) => item.join("-"));
  const data = getBarLength(ages);
  return { labels, data };
};
export { getGraphData };
