/**
 * Returns random number between min and max
 * @param {number} min - Minimum bound
 * @param {number} max - Maximum bound
 * @param {number} fractionDigits - Number of digits after the decimal point
 * @returns {number} Random number between min and max
 */
export function getRandomNumber(min, max, fractionDigits = 2) {
  const num = (max - min) * Math.random() + min;
  return num.toFixed(fractionDigits);
}
