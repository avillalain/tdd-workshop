import {render, screen} from '@testing-library/react'

import {SignUp} from './index';
import userEvent from '@testing-library/user-event';

describe('<SignUp/>', () => {

  beforeEach( () => {
    render(<SignUp />);
  });

  it('should allow the user to input their personal information', () => {
    const firstname = 'Angel';
    const lastname = 'Villalain';
    const email = 'some@email.com'
    let field = screen.getByRole('textbox', {name: /First Name/i});
    userEvent.type(field, firstname);
    expect(field.value).toBe(firstname);
    field = screen.getByRole('textbox', {name: /Last Name/i});
    userEvent.type(field, lastname);
    expect(field.value).toBe(lastname);
    field = screen.getByRole('textbox', {name: /Email/i});
    userEvent.type(field, email);
    expect(field.value).toBe(email);
  });

});