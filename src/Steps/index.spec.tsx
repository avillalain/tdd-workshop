import React from 'react';
import {render, screen} from '@testing-library/react';
import {Steps} from './index';

describe('<Steps/>', () => {
  const steps: JSX.Element[] = [<div key={1} data-testid="step1"><h1>This is step1</h1></div>,
    <div key={2} data-testid="step2"><h1>This is step1</h1></div>];

  it('should display the first step when current step is not specified', () => {
    render(<Steps>{steps}</Steps>);
    const step = screen.getByTestId("step1");
    expect(step).toBeVisible();
  });

  it('should display the specified step', () => {
    render(<Steps currentStep={1}>{steps}</Steps>);
    const step = screen.getByTestId("step2");
    expect(step).toBeVisible();
  });

  it('should not display anything when steps is empty', () => {
    const { container } = render(<Steps/>);
    expect(container).toBeEmpty();
  });

  it('should not display anything when current steps is more than the number of steps', () => {
    const { container } = render(<Steps currentStep={2}>{steps}</Steps>);
    expect(container).toBeEmpty();
  });
});