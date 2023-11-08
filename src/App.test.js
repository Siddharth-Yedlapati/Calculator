import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { exp } from 'mathjs';

test('addition test_positive', () => {
  render(<App />);
  const two = screen.getByText("2");
  const three = screen.getByText("3");
  const add = screen.getByText("+");
  const equals = screen.getByText("=");
  
  fireEvent.click(two)
  fireEvent.click(add)
  fireEvent.click(three)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).toBe("5.000")

});

test('addition test_negative', () => {
  render(<App />);
  const two = screen.getByText("2");
  const three = screen.getByText("3");
  const add = screen.getByText("+");
  const equals = screen.getByText("=");
  
  fireEvent.click(two)
  fireEvent.click(add)
  fireEvent.click(three)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).not.toBe("7.000")

});

test('subtraction test_positive', () => {
  render(<App />);
  const seven = screen.getByText("7");
  const three = screen.getByText("3");
  const subtract = screen.getByText("-");
  const equals = screen.getByText("=");
  
  fireEvent.click(seven)
  fireEvent.click(subtract)
  fireEvent.click(three)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).toBe("4.000")

});

test('subtraction test_negative', () => {
  render(<App />);
  const seven = screen.getByText("7");
  const three = screen.getByText("3");
  const subtract = screen.getByText("-");
  const equals = screen.getByText("=");
  
  fireEvent.click(seven)
  fireEvent.click(subtract)
  fireEvent.click(three)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).not.toBe("8.000")

});

test('multiplication test_positive', () => {
  render(<App />);
  const five = screen.getByText("5");
  const three = screen.getByText("3");
  const multiply = screen.getByText("*");
  const equals = screen.getByText("=");
  
  fireEvent.click(five)
  fireEvent.click(multiply)
  fireEvent.click(three)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).toBe("15.000")

});

test('multiplication test_negative', () => {
  render(<App />);
  const five = screen.getByText("5");
  const three = screen.getByText("3");
  const multiply = screen.getByText("*");
  const equals = screen.getByText("=");
  
  fireEvent.click(five)
  fireEvent.click(multiply)
  fireEvent.click(three)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).not.toBe("20.000")

});

test('division test_positive', () => {
  render(<App />);
  const nine = screen.getByText("9");
  const three = screen.getByText("3");
  const divide = screen.getByText("/");
  const equals = screen.getByText("=");
  
  fireEvent.click(nine)
  fireEvent.click(divide)
  fireEvent.click(three)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).toBe("3.000")

});

test('division test_negative', () => {
  render(<App />);
  const nine = screen.getByText("9");
  const three = screen.getByText("3");
  const divide = screen.getByText("/");
  const equals = screen.getByText("=");
  
  fireEvent.click(nine)
  fireEvent.click(divide)
  fireEvent.click(three)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).not.toBe("5.000")

});

test('exponent test_positive', () => {
  render(<App />);
  const four = screen.getByText("4");
  const five = screen.getByText("5");
  const exponent = screen.getByText("^");
  const equals = screen.getByText("=");
  
  fireEvent.click(four)
  fireEvent.click(exponent)
  fireEvent.click(five)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).toBe("1024.000")

});

test('exponent test_negative', () => {
  render(<App />);
  const four = screen.getByText("4");
  const five = screen.getByText("5");
  const exponent = screen.getByText("^");
  const equals = screen.getByText("=");
  
  fireEvent.click(four)
  fireEvent.click(exponent)
  fireEvent.click(five)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).not.toBe("512.000")

});

test('squareroot test_positive', () => {
  render(<App />);
  const sqrt = screen.getByText("sqrt(");
  const nine = screen.getByText("9");
  const brack = screen.getByText(")")
  const equals = screen.getByText("=");
  
  fireEvent.click(sqrt)
  fireEvent.click(nine)
  fireEvent.click(brack)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).toBe("3.000")

});

test('squareroot test_negative', () => {
  render(<App />);
  const sqrt = screen.getByText("sqrt(");
  const nine = screen.getByText("9");
  const brack = screen.getByText(")")
  const equals = screen.getByText("=");
  
  fireEvent.click(sqrt)
  fireEvent.click(nine)
  fireEvent.click(brack)
  fireEvent.click(equals)
  let output_val = document.querySelector('.output')
  let out_text = output_val.textContent
  expect(out_text.replace('Result: ', '')).not.toBe("4.000")

});