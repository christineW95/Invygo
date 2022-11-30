import { morphism, StrictSchema } from "morphism";

import { User} from "../Interfaces/User";
const UserItemSchema: StrictSchema<User> = {
  name: "name",
    id: "id",
    address:"address",
    nationality:"nationality",
    age:"age",
    dob:"dob",
    profession:"profession",
    numOfGuests:"numOfGuests"
};
const mapUsersList = (input: Array<any>) =>
  input
    ?.map((element: User, index: number) =>
      morphism(UserItemSchema, { ...element })
    )
   
export default mapUsersList;
