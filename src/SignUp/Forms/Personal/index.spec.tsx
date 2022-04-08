import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Personal} from './index';

describe('<Personal/>', () => {
  beforeEach( () => {
    render(<Personal />);
  });

  it('should allow the user to input their first name', () => {
    const firstname = 'Angel';
    const field = screen.getByRole('textbox', {name: /First Name/i});
    userEvent.type(field, firstname);
    expect(field.value).toBe(firstname);
  });

  it('should allow the user to input their last name', () => {
    const lastname = 'Villalain';
    const field = screen.getByRole('textbox', {name: /Last Name/i});
    userEvent.type(field, lastname);
    expect(field.value).toBe(lastname);
  });

  it('should allow the user to input their email name', () => {
    const email = 'some@email.com';
    const field = screen.getByRole('textbox', {name: /Email/i});
    userEvent.type(field, email);
    expect(field.value).toBe(email);
  });
})