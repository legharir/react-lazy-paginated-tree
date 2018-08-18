// @flow

import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import ReactLazyPaginatedTree from './components/Tree';
import theme from './themes/default';
import SimpleTree from './sample/SimpleTree';

const elem = document.getElementById('app');
if (elem) {
  render(<ReactLazyPaginatedTree nodes={SimpleTree} theme={theme} />, elem);
}

export default ReactLazyPaginatedTree;
