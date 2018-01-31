import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import ComparisonSelector from './index';

describe('<ComparisonSelector />', () => {
  describe('with ReactDOM', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ComparisonSelector />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('with Enzyme', () => {
    it('shallow renders without crashing', () => {
      shallow(<ComparisonSelector />);
    });
  });

  describe('with Snapshot Testing', () => {
    it('renders the same way', () => {
      const component = renderer.create(<ComparisonSelector />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    });
  });
});
