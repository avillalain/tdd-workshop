import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Organization} from './index';
import {Formik} from 'formik';
import {initialValues, schema} from '../index';

describe('<Organization/>', () => {
  beforeEach( () => {
    render(
      <Formik initialValues={initialValues} validationSchema={schema[0]}>
        <Organization />
      </Formik>
    );
  });

  it('should allow the user to input their organization name', () => {
    const organization = 'Thoughtworks';
    const field = screen.getByRole('textbox', {name: /Organization/i});
    userEvent.type(field, organization);
    expect(field.value).toBe(organization);
  });

  it('should allow the user to input their last name', () => {
    const position = 'Yet another developer';
    const field = screen.getByRole('textbox', {name: /Position/i});
    userEvent.type(field, position);
    expect(field.value).toBe(position);
  });
})