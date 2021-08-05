import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'

afterEach(cleanup);

describe('ContactForm component renders', () => {
  it('renders', () => {
    render(<Contact />);
  });
  
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Contact />);
    
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me.')
  })
})