import { Personal,  Model as AccountModel } from './Personal';
import { Organization, Model as OrganizationModel } from './Organization';
import * as Yup from 'yup';
import React from 'react';

const {
  firstName,
  lastName,
  email,
  organization,
  position
} = {...AccountModel, ...OrganizationModel};

export const initialValues = {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [organization.name]: "",
  [position.name]: "",
};

export const schema = [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [organization.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [position.name]: Yup.string().required(`${lastName.requiredErrorMsg}`)
  })
];

export const forms: JSX.Element[] = [<Personal key={1}/>, <Organization key={2}/>, <h2 key={3}>Thanks</h2>]