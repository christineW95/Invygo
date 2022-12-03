import { SearchBy } from "../../../App/Helpers/search.helper";
const users = require("../../../App/services/MOCK_DATA.json");
describe("get search results successfully", () => {
  test("renders correctly", () => {
    const query = "france";
    const result = SearchBy(query, users);
    expect(result).toHaveLength(3);

   
  });
});
