import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import Card from './index';

describe('<Card />', () => {
  describe('with ReactDOM', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Card />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('with Enzyme', () => {
    it('shallow renders without crashing', () => {
      shallow(<Card />);
    });
  });

  describe('with Snapshot Testing', () => {
    it('renders the same way', () => {
      const component = renderer.create(<Card />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    });
  });
});
