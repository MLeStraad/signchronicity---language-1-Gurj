
import React from 'react';

interface OnboardingProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const OnboardingProgressBar: React.FC<OnboardingProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
      <div
        className="bg-nhs-blue h-2.5 rounded-full"
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
      ></div>
    </div>
  );
};

export default OnboardingProgressBar;
