import axios from "axios";
import ProfessionTypes from "../../../App/factory/profession.factory";
import { submitUser } from "../../../App/services/SubmitUser";

describe("render Text Input successfully", () => {
    const user = {
        name: "Christine",
        id: 1,
        address: "test",
        nationality: "Egypt",
        age: "21",
        dob: "01/02/2022",
        profession: ProfessionTypes.EMPLOYEE,
        numOfGuests: "3",
      };
  test("test axios post success function", async () => {
  
    axios.post = jest.fn().mockResolvedValue({data:{success:true},status:200});
    await expect(submitUser(user)).resolves.toEqual({success:true});
  });

});
