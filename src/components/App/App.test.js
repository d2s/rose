import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import App from './index';

describe('<App />', () => {
  describe('with Enzyme', () => {
    it('shallow renders without crashing', () => {
      shallow(<App />);
    });
  });

  describe('with Snapshot Testing', () => {
    it('renders the same way', () => {
      const component = renderer.create(<App />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    });
  });
});
