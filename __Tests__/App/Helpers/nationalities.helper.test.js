import { getGraphData } from "../../../App/Helpers/nationalities.helper";

describe('get nationalities successfully', () => {
  test('renders correctly', () => {
    const range = 4
        		const result= getGraphData(range)
                expect(result.labels).toHaveLength(4)
  })
 
})
