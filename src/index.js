// @flow

import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import ReactLazyPaginatedTree from './components/Tree';
import theme from './themes/default';
import SimpleTree from './sample/SimpleTree';

/*
<ReactLazyPaginatedTree
  nodes={nodes}
  theme={theme}
  animation={animation}
  lazyLoad={lazyLoad}
/>
*/

const defaultElem = document.getElementById('default');
const customElem = document.getElementById('custom');
const mui = document.getElementById('mui');
if (defaultElem && customElem && mui) {
  render(
    <ReactLazyPaginatedTree nodes={SimpleTree} theme={theme} />,
    defaultElem,
  );
  render(
    <ReactLazyPaginatedTree nodes={SimpleTree} theme={theme} />,
    customElem,
  );
  render(<ReactLazyPaginatedTree nodes={SimpleTree} theme={theme} />, mui);
}

export default ReactLazyPaginatedTree;
