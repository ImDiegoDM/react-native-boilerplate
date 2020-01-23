import React from 'react';
import { Home } from '../home';
import renderer from 'react-test-renderer';

it('Deve renderizar o componente Home corretamente',()=>{
  const tree = renderer.create(<Home/>).toJSON();
  expect(tree).toMatchSnapshot();
});