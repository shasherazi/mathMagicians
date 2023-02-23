import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('The user types 4 + 4', () => {
  const tree = render(<Calculator />);
  const calculatorInput = tree.container.querySelector('.calculator-display');
  let button = tree.getByText('4');
  fireEvent.click(button);
  waitFor(() => expect(calculatorInput.innerHTML).toBe('4'));
  button = tree.getByText('+');
  fireEvent.click(button);
  waitFor(() => expect(calculatorInput.innerHTML).toBe('4 +'));
  button = tree.getByText('4');
  fireEvent.click(button);
  waitFor(() => expect(calculatorInput.innerHTML).toBe('4 + 4'));
  button = tree.getByText('=');
  fireEvent.click(button);
  waitFor(() => expect(calculatorInput.innerHTML).toBe('8'));
});

test('The user tries to divide by zero', () => {
  const tree = render(<Calculator />);
  const calculatorInput = tree.container.querySelector('.calculator-display');
  let button = tree.getByText('4');
  fireEvent.click(button);
  waitFor(() => expect(calculatorInput.innerHTML).toBe('4'));
  button = tree.getByText('÷');
  fireEvent.click(button);
  waitFor(() => expect(calculatorInput.innerHTML).toBe('4 ÷'));
  button = tree.getByText('0');
  fireEvent.click(button);
  waitFor(() => expect(calculatorInput.textContent).toBe('4 ÷ 0'));
  button = tree.getByText('=');
  fireEvent.click(button);
  waitFor(() => expect(calculatorInput.innerHTML).toBe('Cannot divide by zero'));
});
