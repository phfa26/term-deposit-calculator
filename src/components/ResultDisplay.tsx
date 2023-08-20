import React from 'react';
import './ResultDisplay.css';
import { TermDepositResults } from '../utils/TermDepositCalculator';

// Interface to define the props expected by the ResultDisplay component
interface ResultDisplayProps {
  results: TermDepositResults | null; // Results containing totalAmount and interestEarned
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ results }) => {
  return (
    <div className="result-display">
      {results !== null ? 
      <>
        <h2 className="result-title">Your Projected Savings:</h2>
        <p className={`result-amount ${results !== null ? 'positive' : 'default'}`}>
          ${results.totalAmount.toFixed(0)}
        </p>
        <h2 className="result-title">Total interest earned:</h2>
        <p className={`result-amount ${results !== null ? 'positive' : 'default'}`}>
          ${results.interestEarned.toFixed(0)}
        </p>
      </> : 
      <p>Enter your conditions to get an estimate</p>
      }
    </div>
  );
};

export default ResultDisplay;
