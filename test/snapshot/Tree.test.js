import React from 'react';
import renderer from 'react-test-renderer';
import { Tree, SampleTree, minimalTheme } from '../../src';

it('renders a sample tree', () => {
  const tree = renderer.create(<Tree nodes={SampleTree} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the correct pagination structure', () => {
  const tree = renderer
    .create(<Tree nodes={SampleTree} pageLimit={10} parse={nodes => nodes} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with a different theme', () => {
  const tree = renderer
    .create(<Tree nodes={SampleTree} theme={minimalTheme} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with a different indent width', () => {
  const tree = renderer
    .create(<Tree nodes={SampleTree} indentWidth={40} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('allows for component overrides', () => {
  const Component = () => <div />;
  const tree = renderer
    .create(
      <Tree
        nodes={SampleTree}
        List={Component}
        ListItem={Component}
        Expander={Component}
        Checkbox={Component}
        Body={Component}
        Paginator={Component}
        Loading={Component}
        DepthPadding={Component}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('allows for method overrides', () => {
  const Callable = () => {};
  const tree = renderer
    .create(
      <Tree
        nodes={SampleTree}
        toggle={Callable}
        onKeyToggle={Callable}
        select={Callable}
        onKeySelect={Callable}
        loadChildren={Callable}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
