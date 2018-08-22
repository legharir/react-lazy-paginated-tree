// @flow

import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';
import type { Theme } from '../types';

const prefixer = postcssJs.sync([autoprefixer]);

const theme: Theme = prefixer({
  treeStyle: {
    padding: 0,
  },
  bodyStyle: {
    padding: '0 5px',
  },
  checkboxStyle: {
    width: 30,
    height: 30,
  },
  checkboxIconStyle: {
    fontSize: 20,
    fill: 'black',
  },
  checkboxIconCheckedStyle: {
    fill: '#1A70BB',
  },
  expanderStyle: {
    width: '20px',
    display: 'inline-block',
    textAlign: 'center',
    marginRight: 0,
    fill: 'black',
  },
  listItemStyle: {
    margin: '2px 0',
    padding: '0 8px',
  },
  paginatorStyle: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  paginatorTextStyle: {
    textAlign: 'center',
    color: '#1A70BB',
  },
  loadingStyle: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  loadingTextStyle: {
    textAlign: 'center',
    color: '#1A70BB',
  },
  listStyle: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default theme;
