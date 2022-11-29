import React from 'react';
import { render} from '@testing-library/react-native';
import Registeration from '../../../screens/Registeration';


describe('Testing react navigation', () => {
  it('navigates on button press', () => {
    const push = jest.fn();
    const { getByText } = render(<Registeration navigation={{ push }} />);
    const title=getByText('Tab One');
    expect(title).toBeTruthy();
  });
  });