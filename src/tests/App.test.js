import { render, screen,fireEvent } from '@testing-library/react';
import App from '../App';
import { AddTask } from '../components/AddTask/AddTask';

test('renders the landing page', () => {
  render(<App />);
});

test("AddTask renders without crashing", () => {
  render(<AddTask />)
});


test("Form submission should not call add method if input field is empty", () => {
  render(<AddTask  />);
  const btn = screen.getByText(/Add/i);
  fireEvent.click(btn); 
});

