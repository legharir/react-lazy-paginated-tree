// @flow

import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';
import type { Theme } from '../types';

const prefixer = postcssJs.sync([autoprefixer]);

const theme: Theme = prefixer({
  treeStyle: {
    padding: '0',
  },
  nodeStyle: {
    display: 'flex',
    padding: '5px',
    margin: '2px 0',
  },
  nodeIconContainerStyle: {
    width: '20px',
    display: 'inline-block',
    textAlign: 'center',
  },
  nodeIconStyle: {
    fill: '#e6e6e6',
    strokeWidth: '0',
    height: '12px',
  },
  nodeBodyStyle: {
    flex: 1,
    wordWrap: 'break-word',
    paddingLeft: '5px',
  },
  nodeHighlightStyle: {
    backgroundColor: '#f3f3f3',
  },
  listContainerStyle: {},
  listStyle: { paddingLeft: '20px' },
  expanderStyle: {
    textAlign: 'right',
    fontSize: '0.8em',
    paddingRight: '10px',
    cursor: 'pointer',
  },
});

export default theme;
