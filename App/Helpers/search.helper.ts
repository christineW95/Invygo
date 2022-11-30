import { User } from "App/Interfaces/User";

const SearchBy =  (query: string,users:Array<User>) => {
  return users.filter((entry: User) => entry.name.toLowerCase().includes(query) || entry.nationality.toLowerCase().includes(query))

};
export { SearchBy };
