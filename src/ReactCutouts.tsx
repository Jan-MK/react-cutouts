import React from 'react';

interface ReactCutoutsProps {
    imageUrl: string;
    cutoutContent: React.ReactNode;
    overlayColor: string;
    wrapperStyle?: React.CSSProperties;
    imageStyle?: React.CSSProperties;
    textStyle?: React.CSSProperties;
}

const ReactCutouts: React.FC<ReactCutoutsProps> = ({
                                                     imageUrl,
                                                     cutoutContent,
                                                     overlayColor,
                                                     wrapperStyle = {},
                                                     imageStyle = {},
                                                     textStyle = {},
                                                 }) => {
    // Function to convert HEX to RGB
    const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    // Function to calculate the complementary color
    const calculateComplementaryColor = (hexColor: string): string => {
        const rgb = hexToRgb(hexColor);
        if (!rgb) return '#FFFFFF'; // Fallback color

        const { r, g, b } = rgb;
        // Invert each component
        const invertedR = 255 - r;
        const invertedG = 255 - g;
        const invertedB = 255 - b;

        // Convert back to HEX
        return `#${invertedR.toString(16).padStart(2, '0')}${invertedG.toString(16).padStart(2, '0')}${invertedB.toString(16).padStart(2, '0')}`;
    };

    const textComplementaryColor = calculateComplementaryColor(overlayColor);

    const combinedWrapperStyle: React.CSSProperties = {
        ...wrapperStyle,
        position: 'relative',
        overflow: 'hidden',
    };

    const combinedImageStyle: React.CSSProperties = {
        ...imageStyle,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        backgroundImage: `url(${imageUrl})`,
    };

    const combinedTextStyle: React.CSSProperties = {
        ...textStyle,
        color: textComplementaryColor,
    };

    return (
        <div style={combinedWrapperStyle}>
            <div style={combinedImageStyle}>
                <div style={combinedTextStyle}>
                    {cutoutContent}
                </div>
            </div>
        </div>
    );
};

export default ReactCutouts;
