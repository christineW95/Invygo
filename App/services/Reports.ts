import { User } from "../Interfaces/User";

const users = require("./MOCK_DATA.json");
const categorizeByAge = (range: Array<number>) => {
  return users.filter((user: User) => range.includes(user.age));
};
const categorizeByProfession = (profession: string) => {
  return users.filter((user: User) => user.profession == profession);
};
const reduceNationalities = (): Array<string> => [
  ...new Set(users.map((user: User) => user.nationality)),
];

const categorizeByNationalities = (nationality: string) =>
  users.filter((user: User) => user.nationality == nationality);

export {
  categorizeByAge,
  categorizeByProfession,
  categorizeByNationalities,
  reduceNationalities,
};
