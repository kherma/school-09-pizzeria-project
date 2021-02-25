import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders render without crashing', () => {
  expect(shallow(<App />)).toBeTruthy();
});
