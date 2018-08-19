// @flow

import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import ReactLazyPaginatedTree from './components/Tree';
import DefaultTheme from './themes/default';
import DarkTheme from './themes/dark';
import SimpleTree from './sample/SimpleTree';

const defaultElem = document.getElementById('default');
const customElem = document.getElementById('custom');
const mui = document.getElementById('mui');
if (defaultElem && customElem && mui) {
  render(
    <ReactLazyPaginatedTree nodes={SimpleTree} theme={DefaultTheme} />,
    defaultElem,
  );
  render(
    <ReactLazyPaginatedTree nodes={SimpleTree} theme={DarkTheme} />,
    customElem,
  );
  render(
    <ReactLazyPaginatedTree nodes={SimpleTree} theme={DefaultTheme} />,
    mui,
  );
}

export default ReactLazyPaginatedTree;
