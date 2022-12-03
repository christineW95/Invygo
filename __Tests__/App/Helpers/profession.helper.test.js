import ProfessionTypes from "../../../App/factory/profession.factory";
import { getGraphData } from "../../../App/Helpers/profession.helper";

describe('get nationalities successfully', () => {
  test('renders correctly', () => {
    const profession = [ProfessionTypes.EMPLOYEE, ProfessionTypes.STUDENT];
        		const result= getGraphData(profession)
            expect(result.labels).toEqual(profession)

  })
 
})
