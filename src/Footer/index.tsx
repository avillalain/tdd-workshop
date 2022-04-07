import React from 'react';
import {useStyle} from '../styles';

export const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      {'Copyright © '} | {new Date().getFullYear()}
    </div>
  );
};