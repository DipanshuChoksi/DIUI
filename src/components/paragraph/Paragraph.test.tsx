import { render, screen } from '@testing-library/react';
import Paragraph from './Paragraph';

describe('Paragraph', () => {
  it('renders the contents', () => {
    render(<Paragraph />);
    expect(screen.getByText('Hello world'));
  });
});
