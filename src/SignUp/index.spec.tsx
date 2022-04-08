import {render, screen} from '@testing-library/react'

import {SignUp} from './index';
import userEvent from '@testing-library/user-event';

describe('<SignUp/>', () => {

  beforeEach( () => {
    render(<SignUp />);
  });

  it('should allow the user to input the user organization', async () => {
    const firstname = 'Angel';
    const lastname = 'Villalain';
    const email = 'some@email.com';
    const organization = 'Thoughtworks';
    const position = 'Yet another developer';
    let field = screen.getByRole('textbox', {name: /First Name/i});
    userEvent.type(field, firstname);
    expect(field.value).toBe(firstname);
    field = screen.getByRole('textbox', {name: /Last Name/i});
    userEvent.type(field, lastname);
    expect(field.value).toBe(lastname);
    field = screen.getByRole('textbox', {name: /Email/i});
    userEvent.type(field, email);
    expect(field.value).toBe(email);
    let button = screen.getByRole('button', {name: /Next/i});
    userEvent.click(button);
    field = await screen.findByRole('textbox', {name: /Organization/i});
    userEvent.type(field, organization);
    expect(field.value).toBe(organization);
    field = await screen.findByRole('textbox', {name: /Position/i});
    userEvent.type(field, position);
    expect(field.value).toBe(position);
  });

});