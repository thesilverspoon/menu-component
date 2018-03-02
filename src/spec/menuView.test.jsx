import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuView from '../client/app/MenuView';

Enzyme.configure({ adapter: new Adapter() });

describe('MenuView Component', () => {
  test('should render correctly', () => {
    expect(Enzyme.shallow(<MenuView />)).toMatchSnapshot();
  });
});
