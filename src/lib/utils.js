/**
 * Returns random number between min and max
 * @param {number} min
 * @param {number} max
 * @returns
 */
export function getRandomNumber(min, max) {
  return Math.round((max - min) * Math.random() + min);
}
