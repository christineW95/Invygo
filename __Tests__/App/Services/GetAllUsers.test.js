import axios from "axios";
import { getData } from "../../../App/services/GetAllUsers";

describe("get all users successfully", () => {

  test("test axios get success function", async () => {
   const data=[{
    "id": 1,
    "name": "Prent",
    "address": "2847 Stephen Place",
    "nationality": "Indonesia",
    "dob": "4/27/2022",
    "numOfGuests": 1,
    "profession": "Student",
    "age": 18
  },
  {
    "id": 2,
    "name": "Anet",
    "address": "308 Hauk Center",
    "nationality": "France",
    "dob": "9/14/2022",
    "numOfGuests": 2,
    "profession": "Student",
    "age": 53
  },]
    axios.get = jest.fn().mockResolvedValue({data,status:200});
    await expect(getData()).resolves.toEqual(data);
  });

});
