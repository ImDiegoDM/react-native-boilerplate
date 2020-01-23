import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from '../home';

it('Deve renderizar o componente Home corretamente', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
