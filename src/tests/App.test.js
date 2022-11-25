import { render, screen } from '@testing-library/react';
import App from '../App';
import { AddTask } from '../components/AddTask/AddTask';

test('renders the landing page', () => {
  render(<App />);
});

test("AddTask renders without crashing", () => {
  render(<AddTask />)
});


