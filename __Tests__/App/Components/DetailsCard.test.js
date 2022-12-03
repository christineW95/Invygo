import {  render } from "@testing-library/react-native";
import DetailsCard from "../../../App/components/DetailsCard";


describe('render details tile successfully', () => {
    it("Deatils Card Wrapper", () => {
        const props={
            name:'Christina',
            nationality:'Egypt',
        }
      const {queryByTestId} = render(<DetailsCard {...props} />);
      const wrapper=queryByTestId('Title_Component')
      expect(wrapper).toBeTruthy();
      const Nationality_Component=queryByTestId('Nationality_Component')
      expect(Nationality_Component).toBeTruthy();

      
    });
   
  })