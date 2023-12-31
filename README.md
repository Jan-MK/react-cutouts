# React Cutouts

`react-cutouts` is a customizable React component that provides a unique way to display images with overlaying text or SVG content. It allows for dynamic styling, including the ability to set custom background images, overlay colors, and text styles.

## Features

- Set a background image by URL or local path.
- Overlay text or SVG content.
- Customize overlay color and transparency.
- Automatic calculation of complementary text color.
- Fully customizable styles for wrapper, image, and text.

## Installation

Install `react-cutouts` using npm:

```bash
npm install react-cutouts
```

Or using yarn:

```bash
yarn add react-cutouts
```

## Usage

Import `ReactCutouts` in your React component:

```jsx
import ReactCutouts from 'react-cutouts';
```

Then use it in your component:

```jsx
<ReactCutouts
  imageUrl="path-to-your-image.jpg"
  cutoutContent="Your Text or SVG"
  overlayColor="#000000"
  wrapperStyle={{ width: '100%', height: '500px' }}
  imageStyle={{ objectFit: 'cover' }}
  textStyle={{ fontSize: '2em' }}
/>
```

## Props

- **imageUrl**: String - URL or path to the background image.
- **cutoutContent**: React.ReactNode - Content for the cutout (text or SVG).
- **overlayColor**: String - HEX color value for the overlay.
- **wrapperStyle**: React.CSSProperties - Optional custom styles for the wrapper.
- **imageStyle**: React.CSSProperties - Optional custom styles for the image.
- **textStyle**: React.CSSProperties - Optional custom styles for the text.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to submit pull requests, bug reports, and feature requests.


## License

`react-cutouts` is available under the [MIT License](LICENSE).
