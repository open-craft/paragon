# Dropdown

Provides a dropdown component that will maintain focus and keyboard navigation on `Item` child components.

Note: When passing in a component to `Item` that uses a prop other than `ref` for access to a focusable DOM element (such as the `Link` component from `react-router`, which uses `innerRef`), it's recommended to wrap the component in another component that exposes it's own focus method.

## API

### `className` (string; optional)
`className` is used to determine the type of button to be rendered, and any other classNames to be added to the dropdown menu and menu items. See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types and it's classNames.

## Subcomponent `Button`
`Button` specifies the text that is displayed within the original dropdown button. Can have an 'icon' element to be displayed alongside the text.

## Subcomponent `Item`
`Item` specifies the items that will be rendered within the dropdown for selection.  It accepts React/HTML elements.

### `type` (string; optional)
`type` is used to determine the type of tag to be rendered. Default is an <a></a> tag.
