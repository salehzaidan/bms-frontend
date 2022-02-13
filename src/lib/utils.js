export function round(num, fractionDigits = 2) {
  const factor = Math.pow(10, fractionDigits);
  return Math.round(num * factor) / factor;
}

export function getRandomNumber(min, max, fractionDigits = 2) {
  const num = (max - min) * Math.random() + min;
  return round(num, fractionDigits);
}

export function sum(nums, fractionDigits = 2) {
  let total = 0.0;
  nums.forEach(num => {
    total = total + num;
  });
  return round(total, fractionDigits);
}

export function average(nums, fractionDigits = 2) {
  const total = sum(nums);
  return round(total / nums.length, fractionDigits);
}
