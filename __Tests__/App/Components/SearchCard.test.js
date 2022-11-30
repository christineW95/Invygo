import { fireEvent, render } from "@testing-library/react-native";
import SearchCard from "../../../App/components/SearchCard";


describe('render search tile successfully', () => {
    it("Search Card Wrapper", () => {
        const props={
            name:'Christina',
            nationality:'Egypt',
            onPress:jest.fn()
        }
      const {queryByTestId} = render(<SearchCard {...props} />);
      const wrapper=queryByTestId('Search_Card_Wrapper')
      expect(wrapper).toBeTruthy();

      fireEvent.press(wrapper)
      expect(props.onPress).toHaveBeenCalled()
    });
    it("Search Card Components", () => {
        const props={
            name:'Christina',
            nationality:'Egypt',
            onPress:jest.fn()
        }
      const {queryByTestId} = render(<SearchCard {...props} />);
      const Card_Image=queryByTestId('Card_Image')
      expect(Card_Image).toBeTruthy();

      const Card_Type_Text=queryByTestId('Card_Type_Text')
      expect(Card_Type_Text).toBeTruthy();
      const val=Card_Type_Text.children[0]
      expect(val).toEqual(props.name)

      const Card_Title_Text=queryByTestId('Card_Title_Text')
      expect(Card_Title_Text).toBeTruthy();
      const value=Card_Title_Text.children[0]
      expect(value).toEqual(props.nationality)

    });
  })