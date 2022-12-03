import { getGraphData } from "../../../App/Helpers/age.helper";

describe('get age successfully', () => {
  test('renders correctly', () => {
    const ages = [
                    [13, 18],
                    [18, 25],
                    [25, 80],
                  ];
        		const result= getGraphData(ages)
                expect(result.labels).toEqual(['13-18','18-25','25-80'])
  })
 
})
