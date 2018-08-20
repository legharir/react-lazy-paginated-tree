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
    backgroundColor: '#4d4d4d',
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
    color: 'white',
  },
  nodeHighlightStyle: {
    backgroundColor: 'black',
  },
  listContainerStyle: {},
  listStyle: { paddingLeft: '20px' },
});

export default theme;
