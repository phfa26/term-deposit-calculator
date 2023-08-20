import { termDepositCalculator } from './TermDepositCalculator';

describe('Term Deposit Calculator utility', () => {
  it('calculates totalAmount and interestEarned correctly', () => {
    const principal = 10000;
    const yearlyInterestRate = 1.1; // 1.1% annual interest rate
    const term = 3; // 3 years
    const isMonths = false; // Not in months
    const interestFrequency = 'maturity'; //Paid at maturity

    const expectedTotalAmount = 10330;
    const expectedInterestEarned = 330;

    const result = termDepositCalculator(principal, yearlyInterestRate, term, isMonths, interestFrequency);

    expect(result.totalAmount).toBeCloseTo(expectedTotalAmount, 2); // Close enough considering floating-point precision
    expect(result.interestEarned).toBeCloseTo(expectedInterestEarned, 2); 
  });
});