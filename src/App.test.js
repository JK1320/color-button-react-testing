import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button & text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // expect the background colour to be red/ MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  // expect the background colour to be blue/ MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the button text to be 'Change o red'/ Change to Medium Violet Red
  expect(colorButton.textContent).toBe("Change to Medium Violet Red");
});



// test('button turns blue when clicked', () => {
// render(<App />);
// const colorButton = screen.getByRole('button', {name: 'Change to blue'});
// });


test('initial conditions', () => {
  render(<App />)
  // check that button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

});

test('Checkbox disables button on first click and enables on second click', () => {
render(<App />);
const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'}); //label text
const button = screen.getByRole('button', {name: 'Change to Midnight Blue'});

fireEvent.click(checkbox);
expect(button).toBeDisabled();

fireEvent.click(checkbox);
expect(button).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'})

  // disable button
  fireEvent.click(checkbox);
 expect(button).toHaveStyle({backgroundColor: 'gray'});

 // re-enable button
 fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('Clicked disabled button has gray background and reverts to blue', () => {
render(<App />)
const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

// change to blue
fireEvent.click(button)

// disable button
fireEvent.click(checkbox)
expect(button).toHaveStyle({ backgroundColor: "gray" });

// re-enable button
fireEvent.click(checkbox);
expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

// unit test example - describe() => way to grouping tests
// testing a function, which adds spaces before camel cases 

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