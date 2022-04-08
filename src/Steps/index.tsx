import React from 'react';

interface StepComponents {
  children?: JSX.Element[];
  currentStep?: number;
}

export const Steps = ({children, currentStep = 0}: StepComponents) => {
  return (
    (children && currentStep < children.length) ? children[currentStep] : <></>
  )
};