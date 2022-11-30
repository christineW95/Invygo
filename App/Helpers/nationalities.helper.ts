import {
  categorizeByNationalities,
  reduceNationalities,
} from "../services/Reports";

/**
 *
 * @param range of numbers
 * @returns length of every part in the range
 */
const getBarLength = (labels: Array<string>) => {
  return labels.map(
    (nationality) => categorizeByNationalities(nationality).length
  );
};
const getGraphData = (range: number) => {
  const labels = reduceNationalities().slice(0, range);
  const data = getBarLength(labels);
  return { labels, data };
};
export { getGraphData };
