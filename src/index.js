// @flow

import './index.css';

import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import axios from 'axios';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Folder from '@material-ui/icons/Folder';
import FolderOpen from '@material-ui/icons/FolderOpen';
import Checkbox from '@material-ui/core/Checkbox';
import ReactLazyPaginatedTree from './components/Tree';
import DarkTheme from './themes/dark';
import SimpleTree from './sample/SimpleTree';
import SimpleTreeTwo from './sample/SimpleTreeTwo';
import SimpleTreeThree from './sample/SimpleTreeThree';

import type { Node } from './types';

const defaultElem = document.getElementById('default');
const customElem = document.getElementById('custom');
const mui = document.getElementById('mui');
const api = document.getElementById('api');

/* MUI COMPONENTS */
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

/* RENDERING EXAMPLES */
const transform = (response: Array<Object>): Array<Node> => {
  /* this method assumes that the endpoint orders the response */
  const parsedResponse = [];
  for (let i = 0; i < response.length; i += 1) {
    const { id, name, alias, numChildren } = response[i];
    const transformedNode: Node = {
      id,
      name,
      description: alias,
      children: [],
      numChildren,
      expanded: false,
      selected: false,
    };
    parsedResponse.push(transformedNode);
  }
  return parsedResponse;
};

const loadChildren = node => {
  const { id } = node;
  // make request
  return axios({
    method: 'get',
    url: `https://mdo.vena.io/api/models/643944054354083840/dimensions/1/members/${id}/children?limit=500&page=1&_=1534781755460`,
    headers: {
      Authorization:
        'VenaBasic NTEyMDIwMDE5MzEyMzI4NzA0LjUxMjAxOTA2NzQ2OTU2MTg1Njo2MjhhNjRhZDJjMTc0NTM1YWI4M2I3NjA1ZmRiMmJkMw==',
      'Content-Type': 'application/json',
    },
  }).then(response => transform(response.data));
};

// Make a request for a user with a given ID
axios({
  method: 'get',
  url:
    'https://mdo.vena.io/api/models/643944054354083840/dimensions/1/members/root/children?_=1534781755460',
  headers: {
    Authorization:
      'VenaBasic NTEyMDIwMDE5MzEyMzI4NzA0LjUxMjAxOTA2NzQ2OTU2MTg1Njo2MjhhNjRhZDJjMTc0NTM1YWI4M2I3NjA1ZmRiMmJkMw==',
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    const nodes: Array<Node> = transform(response.data);
    if (api) {
      render(
        <ReactLazyPaginatedTree
          nodes={nodes}
          loadChildren={loadChildren}
          ListItem={MUIListItem}
          Icon={MUIIcon}
          Checkbox={MUICheckbox}
          Body={MUIBody}
        />,
        api,
      );
    }
  })
  .catch(error => {
    console.log(error);
  });

if (defaultElem && customElem && mui) {
  render(<ReactLazyPaginatedTree nodes={SimpleTree} />, defaultElem);
  render(
    <ReactLazyPaginatedTree nodes={SimpleTreeTwo} theme={DarkTheme} />,
    customElem,
  );
  render(
    <ReactLazyPaginatedTree
      nodes={SimpleTreeThree}
      ListItem={MUIListItem}
      Icon={MUIIcon}
      Checkbox={MUICheckbox}
      Body={MUIBody}
    />,
    mui,
  );
}

export default ReactLazyPaginatedTree;
