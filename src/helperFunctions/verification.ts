const exceedsMax = (
  amount: number,
  maturity: number,
  maxAmount: number,
  maxMaturity: number,
) => {
  if (amount > maxAmount) {
    alert(`You exceeded the maximum loan amount of ${maxAmount}€!`);
    return true;
  } if (maturity > maxMaturity) {
    alert(`You exceeded the maximum loan maturity of ${maxMaturity} months!`);
    return true;
  }
  return false;
};

export default exceedsMax;
