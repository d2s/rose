import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import Chart from './index';

describe('<Chart />', () => {
  describe('with ReactDOM', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Chart />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('with Enzyme', () => {
    it('shallow renders without crashing', () => {
      shallow(<Chart />);
    });
  });

  describe('with Snapshot Testing', () => {
    it('renders the same way', () => {
      const component = renderer.create(<Chart />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    });
  });
});
