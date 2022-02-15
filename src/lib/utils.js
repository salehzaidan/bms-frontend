export function round(num, fractionDigits = 2) {
  const factor = Math.pow(10, fractionDigits);
  return Math.round(num * factor) / factor;
}

export function getRandomNumber(min, max, fractionDigits = 2) {
  const num = (max - min) * Math.random() + min;
  return round(num, fractionDigits);
}

export function randomizeData(data) {
  return {
    value: [
      data.value.map(item => ({
        voltage: getRandomNumber(0, 4.5),
        temperature: getRandomNumber(0, 27.0),
        soc: getRandomNumber(0, 100.0),
        ...item,
      })),
    ],
    general: [
      {
        ...data.general[0],
        total_voltage: getRandomNumber(0.0, 20 * 4.5),
        max_voltage: getRandomNumber(4.0, 5.0),
        min_voltage: getRandomNumber(0.0, 1.0),
        avg_voltage: getRandomNumber(0.0, 5.0),
        max_temperature: getRandomNumber(26.0, 27.0),
        min_temperature: getRandomNumber(0.0, 1.0),
        avg_temperature: getRandomNumber(0.0, 27.0),
        max_soc: getRandomNumber(90.0, 100.0),
        min_soc: getRandomNumber(0.0, 10.0),
        avg_soc: getRandomNumber(0.0, 100.0),
      },
    ],
  };
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
