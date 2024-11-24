import { render, screen, waitFor } from '@testing-library/react';
import {ApiResponse} from './apiResponse.js';
import moxios from 'moxios';
import axios from 'axios';
import App from './App';

beforeEach(() => {
  moxios.install(axios);
 
});

afterEach(() => {
  moxios.uninstall(axios);
});
test('renders loading... while data is being fetched', () => {
  // Render the App component
  render(<App/>);
  expect(screen.getByTestId('loading')).toBeInTheDocument();

});

test('renders table when data is fetched', async () => {
  moxios.stubRequest('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json', {
    status: 200,
    response: ApiResponse.Success
  });
  render(<App/>);
  await waitFor(() => {
    expect(screen.getByTestId('table')).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByTestId('nextButton')).toBeInTheDocument();
  });
})

test('renders error when data is not fetched', async () => {
  moxios.stubRequest('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json', {
    status: 500,
    response: ApiResponse.Failure
  });
  render(<App/>);
  await waitFor(() => {
    expect(screen.getByTestId('error')).toBeInTheDocument();
  });
})

