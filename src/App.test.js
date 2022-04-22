import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
 render(<App />);

 // find an element with a role of button & text of 'Change to blue'
 const colorButton = screen.getByRole('button', {name: 'Change to blue'});

 // expect the background colour to be red
 expect(colorButton).toHaveStyle({backgroundColor: 'red'});

 // click button
fireEvent.click(colorButton)

// expect the background colour to be blue
expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

// expect the button text to be 'Change o red'
expect(colorButton.textContent).toBe('Change to red')
});



// test('button turns blue when clicked', () => {
// render(<App />);
// const colorButton = screen.getByRole('button', {name: 'Change to blue'});
// });
