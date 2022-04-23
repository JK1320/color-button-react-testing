import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';

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
const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'}); //label text
const button = screen.getByRole('button', {name: 'Change to blue'});

fireEvent.click(checkbox);
expect(button).toBeDisabled();

fireEvent.click(checkbox);
expect(button).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'})

  // disable button
  fireEvent.click(checkbox);
 expect(button).toHaveStyle({backgroundColor: 'gray'});

 // re-enable button
 fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('Clicked disabled button has gray background and reverts to blue', () => {
render(<App />)
const button = screen.getByRole('button', { name: 'Change to blue' });
const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

// change to blue
fireEvent.click(button)

// disable button
fireEvent.click(checkbox)
expect(button).toHaveStyle({ backgroundColor: "gray" });

// re-enable button
fireEvent.click(checkbox);
expect(button).toHaveStyle({ backgroundColor: "blue" });
});

// unit test example - describe() => way to grouping tests

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });

});