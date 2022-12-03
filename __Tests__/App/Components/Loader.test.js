import {  render } from "@testing-library/react-native";
import Loader from "../../../App/components/Loader";


describe('render loader successfully', () => {
    it("Loader Wrapper", () => {
       
      const {queryByTestId} = render(<Loader visible={true}/>);
      const wrapper=queryByTestId('Modal_Component')
      expect(wrapper).toBeTruthy();
      const Loader_Component=queryByTestId('Loader_Component')
      expect(Loader_Component).toBeTruthy();

      
    });

  })