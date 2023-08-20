import React, { useState } from 'react';
import './Form.css'; 

// Interface to define the props expected by the Form component
interface FormProps {
  calculateResult: (
    startingPrincipal: number,
    yearlyInterestRate: number,
    term: number,
    isMonths: boolean,
    interestFrequency: string
  ) => void;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const Form: React.FC<FormProps> = ({ calculateResult, setError }) => {
  const [startingPrincipal, setPrincipal] = useState<number>(0);
  const [yearlyInterestRate, setInterestRate] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [isMonths, setIsMonths] = useState<boolean>(false);
  const [interestFrequency, setInterestFrequency] = useState<string>('monthly'); // Defaults to Monthly


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const valuesToCheck = [startingPrincipal, yearlyInterestRate, term];

    if (valuesToCheck.some(value => isNaN(value) || value <= 0)) {
      setError('All values must be valid numbers and greater than 0');
    } else {
      setError(null);
      calculateResult(startingPrincipal, yearlyInterestRate, term, isMonths, interestFrequency);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Principal Amount:
        <input type="number" value={startingPrincipal} onChange={(e) => setPrincipal(Number(e.target.value))} />
      </label>
      <label>
        Interest Rate:
        <input type="number" step="0.01" value={yearlyInterestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
      </label>
      <label>
        Duration:
        <input
          type="number"
          value={term}
          onChange={(e) => setTerm(Number(e.target.value))}
        />
        <select value={isMonths ? 'months' : 'years'} onChange={(e) => setIsMonths(e.target.value === 'months')}>
          <option value="months">Months</option>
          <option value="years">Years</option>
        </select>
      </label>
      <label>
        Interest Frequency:
        <select value={interestFrequency} onChange={(e) => setInterestFrequency(e.target.value)}>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="annually">Annually</option>
          <option value="maturity">At Maturity</option>
        </select>
      </label>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default Form;
