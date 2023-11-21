# React Cutout

`react-cutout` is a customizable React component that provides a unique way to display images with overlaying text or SVG content. It allows for dynamic styling, including the ability to set custom background images, overlay colors, and text styles.

## Features

- Set a background image by URL or local path.
- Overlay text or SVG content.
- Customize overlay color and transparency.
- Automatic calculation of complementary text color.
- Fully customizable styles for wrapper, image, and text.

## Installation

Install `react-cutout` using npm:

```bash
npm install react-cutout
```

Or using yarn:

```bash
yarn add react-cutout
```

## Usage

Import `ReactCutout` in your React component:

```jsx
import ReactCutout from 'react-cutout';
```

Then use it in your component:

```jsx
<ReactCutout
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

Contributions are welcome!

## License
Not yet licensed.
