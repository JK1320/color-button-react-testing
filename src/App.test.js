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


test('initial conditions', () => {
  render(<App />)
  // check that button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

});

test('Checkbox disables button on first click and enables on second click', () => {
render(<App />);
const checkbox = screen.getByRole('checkbox', {name: 'Disable button'}); //label text
const button = screen.getByRole('button', {name: 'Change to blue'});

fireEvent.click(checkbox);
expect(button).toBeDisabled();

fireEvent.click(checkbox);
expect(button).toBeEnabled();
});