import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../Login';
import { Provider } from 'react-redux';
import store from '../../../store/index'

const MockLogin = () => {
  <Provider store={store}>
    <Login />
  </Provider>
}

describe('Login', () => {
  it('renders the Login page', () => {
    render(<MockLogin />);
  })
})