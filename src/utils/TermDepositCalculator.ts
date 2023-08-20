/**
 * Represents the results of a term deposit calculation.
**/
export interface TermDepositResults {
  totalAmount: number;
  interestEarned: number;
}

/**
 * Calculates the results of a term deposit based on the given parameters.
 * @param principal The principal amount (initial investment)
 * @param yearlyInterestRate The annual interest rate as a decimal (e.g., 0.05 for 5%)
 * @param term The term of the deposit in years (if `isMonths` is false) or months (if `isMonths` is true)
 * @param isMonths Indicates whether the term is provided in months (true) or years (false)
 * @param interestFrequency The frequency of interest compounding or payment (monthly, quarterly, annually, maturity)
 * @returns The calculated results including the total amount and interest earned
**/
export const termDepositCalculator = (
  principal: number,
  yearlyInterestRate: number,
  term: number,
  isMonths: boolean,
  interestFrequency: string,
): TermDepositResults => {
  const termInYears = isMonths ? term / 12 : term;

  let compoundsPerYear = 0;
  switch (interestFrequency) {
    case 'monthly':
      compoundsPerYear = 12;
      break;
    case 'quarterly':
      compoundsPerYear = 4;
      break;
    case 'annually':
      compoundsPerYear = 1;
      break;
    case 'maturity':
      break;
    default:
      break;
  }

  const decimalInterestRate = yearlyInterestRate / 100;
  
  // Calculate the total amount based on the interest frequency
  const totalAmount =
    compoundsPerYear <= 0
      ? principal * (1 + decimalInterestRate * termInYears)
      : principal * Math.pow(1 + decimalInterestRate / compoundsPerYear, termInYears * compoundsPerYear);
  
  const interestEarned = totalAmount - principal;

  return {
    totalAmount,
    interestEarned,
  };
};
