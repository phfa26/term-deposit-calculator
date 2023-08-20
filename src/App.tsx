import React, { useState } from 'react';
import Form from './components/Form';
import ResultDisplay from './components/ResultDisplay';
import { TermDepositResults, termDepositCalculator } from './utils/TermDepositCalculator';
import './App.css';

const App: React.FC = () => {
  const [results, setResults] = useState<TermDepositResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateTermDeposit = (
    startingPrincipal: number,
    yearlyInterestRate: number,
    term: number,
    isMonths: boolean,
    interestFrequency: string,
  ) => {
    const valuesToCheck = [startingPrincipal, yearlyInterestRate, term];
  
    if (valuesToCheck.some(value => isNaN(value) || value <= 0)) {
      setError('All values must be positive numbers greater than 0');
      setResults(null);
    } else {
      setError(null);
      const calculatedResults = termDepositCalculator(
        startingPrincipal,
        yearlyInterestRate,
        term,
        isMonths,
        interestFrequency,
      );
      setResults(calculatedResults);
    }
  };

  return (
    <div>
      <h1>Savings Calculator</h1>
      <Form calculateResult={calculateTermDeposit} setError={setError} />
      {error ? <p className='error-message'>{error}</p> : <ResultDisplay results={results} /> }      
    </div>
  );
};

export default App;
