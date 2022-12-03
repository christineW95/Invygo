import axios from "axios";
import { getNationalities } from "../../../App/services/GetNationalities";

describe("get all users successfully", () => {

  test("test axios get success function", async () => {
   const data={"DZ":{"country":"Algeria","region":"Africa"},"AO":{"country":"Angola","region":"Africa"},"BJ":{"country":"Benin","region":"Africa"}}
   const value=[{
     country:"Algeria",
     id:1
   },
   {
    country:"Angola",
    id:2
  },
  {
    country:"Benin",
    id:3
  }
]
    axios.get = jest.fn().mockResolvedValue({data:{data},status:200});
    await expect(getNationalities()).resolves.toEqual({response :value,status:200});
  });

});
