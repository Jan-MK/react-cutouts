import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactCutout from '../ReactCutout'; // Adjust the import path as necessary

describe('ReactCutout Component', () => {
    it('renders the component with provided image and content', () => {
        const imageUrl = 'test-image.jpg';
        const cutoutContent = 'Test Content';

        render(
            <ReactCutout
                imageUrl={imageUrl}
                cutoutContent={cutoutContent}
                overlayColor="#000000"
            />
        );

        expect(screen.getByText(cutoutContent)).toBeInTheDocument();
        // Add more assertions as necessary
    });

    // Add more test cases as necessary
});
