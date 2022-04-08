import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {TextField} from '@mui/material';

interface InputFieldProps {
  name: string;
  label: string;
  requiredErrorMsg?: string;
}

export const InputField = (props:InputFieldProps) => {
  const { requiredErrorMsg, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      fullWidth
      type="text"
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}