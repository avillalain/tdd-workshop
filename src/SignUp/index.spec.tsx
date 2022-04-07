import {render, screen} from '@testing-library/react'

import {SignUp} from './index';
import userEvent from '@testing-library/user-event';

describe('<SignUp/>', () => {

  beforeEach( () => {
    render(<SignUp />);
  });

  it('should allow the user to input their first name', () => {
    const firstname = 'Angel';
    //recommended queryByRole or getByRole, in case the element might not be visible
    //use findBy* and make the test an async test
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

});