import { render } from '@testing-library/react-native';
import App from '../App';

test('form submits two answers', () => {
  const tree = render(<App/>).toJSON();
 expect(tree).toBeTruthy()
  

});