import {render, screen} from '@testing-library/react'
import {SignUp} from './index';
import userEvent from '@testing-library/user-event';

describe('<SignUp/>', () => {

  beforeEach( async () => {
    await render(<SignUp />);
  });

  it.skip('should allow the user create a new account', async () => {
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
    await userEvent.click(button);
    const thanks = await screen.findByRole('heading', {name: /Thanks/i});
    expect(thanks).toBeInTheDocument();
  });

  it('should allow the user to go back to the personal details form after going to organization form', async () => {
    const firstname = 'Angel';
    const lastname = 'Villalain';
    let field = screen.getByRole('textbox', {name: /First Name/i});
    userEvent.type(field, firstname);
    field = screen.getByRole('textbox', {name: /Last Name/i});
    userEvent.type(field, lastname);
    let button = screen.getByRole('button', {name: /Next/i});
    userEvent.click(button);
    button = await screen.findByRole('button', {name: /Back/i});
    await userEvent.click(button);
    field = await screen.findByRole('textbox', {name: /First Name/i});
    expect(field).toBeInTheDocument();
  });

  it('should not display the back button when on the personal details form', () => {
    let button = screen.queryByRole('button', {name: /Back/i});
    expect(button).not.toBeInTheDocument();
  })

  it('should not allow the user to navigate forward without the firstname', async () => {
    const lastname = 'Villalain';
    let field = screen.getByRole('textbox', {name: /Last Name/i});
    userEvent.type(field, lastname);
    let button = screen.getByRole('button', {name: /Next/i});
    userEvent.click(button);
    field = await screen.queryByRole('textbox', {name: /Organization/i});
    expect(field).not.toBeInTheDocument();
  });

});