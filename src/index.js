// @flow

import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Folder from '@material-ui/icons/Folder';
import FolderOpen from '@material-ui/icons/FolderOpen';
import Checkbox from '@material-ui/core/Checkbox';
import ReactLazyPaginatedTree from './components/Tree';
import DefaultTheme from './themes/default';
import DarkTheme from './themes/dark';
import SimpleTree from './sample/SimpleTree';
import SimpleTreeTwo from './sample/SimpleTreeTwo';
import SimpleTreeThree from './sample/SimpleTreeThree';

const defaultElem = document.getElementById('default');
const customElem = document.getElementById('custom');
const mui = document.getElementById('mui');

const MUIListItem = props => (
  <ListItem
    button
    {...props}
    style={{
      backgroundColor: '#f3f3f3',
      margin: '2px 0',
      paddingTop: 0,
      paddingBottom: 0,
    }}
  />
);

const MUIIcon = props => {
  const { node } = props;
  return (
    <ListItemIcon {...props}>
      {node.toggled ? <FolderOpen /> : <Folder />}
    </ListItemIcon>
  );
};

const MUIBody = props => {
  const { node } = props;
  return <ListItemText {...props} primary={node.name} />;
};

const MUICheckbox = props => {
  const { node } = props;
  return <Checkbox {...props} checked={node.selected} />;
};

if (defaultElem && customElem && mui) {
  render(
    <ReactLazyPaginatedTree nodes={SimpleTree} theme={DefaultTheme} />,
    defaultElem,
  );
  render(
    <ReactLazyPaginatedTree nodes={SimpleTreeTwo} theme={DarkTheme} />,
    customElem,
  );
  render(
    <ReactLazyPaginatedTree
      nodes={SimpleTreeThree}
      theme={DefaultTheme}
      ListItem={MUIListItem}
      Icon={MUIIcon}
      Checkbox={MUICheckbox}
      Body={MUIBody}
    />,
    mui,
  );
}

export default ReactLazyPaginatedTree;
