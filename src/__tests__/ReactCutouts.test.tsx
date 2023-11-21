import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactCutouts from '../ReactCutouts';

describe('ReactCutouts Component', () => {
    it('renders the component with provided image and content', () => {
        const imageUrl = 'test-image.jpg';
        const cutoutContent = 'Test Content';

        render(
            <ReactCutouts
                imageUrl={imageUrl}
                cutoutContent={cutoutContent}
                overlayColor="#000000"
            />
        );

        expect(screen.getByText(cutoutContent)).toBeInTheDocument();
    });
});
