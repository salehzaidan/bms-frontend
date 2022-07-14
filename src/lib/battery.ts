export interface Value {
  modul: number;
  voltage: number;
  temperature: number;
  soc: number;
}

export interface General {
  total_voltage: number;
  max_voltage: number;
  min_voltage: number;
  avg_voltage: number;
  max_temperature: number;
  min_temperature: number;
  avg_temperature: number;
  max_soc: number;
  min_soc: number;
  avg_soc: number;
}

export interface Data {
  value: Value[];
  general: General[];
  current: number;
  timestamp: string;
}

export class Variable {
  static readonly VOLTAGE = new Variable(
    'Voltage',
    'V',
    true,
    'emojione-monotone:high-voltage'
  );
  static readonly TEMPERATURE = new Variable(
    'Temperature',
    '&deg;C',
    false,
    'fluent:temperature-20-filled'
  );
  static readonly CURRENT = new Variable('Current', 'A', true, '');
  static readonly SOC = new Variable('SoC', '%', false, 'ic:baseline-percent');

  private constructor(
    // @ts-ignore
    readonly label: string,
    // @ts-ignore
    readonly unit: string,
    // @ts-ignore
    readonly space: boolean,
    // @ts-ignore
    readonly icon: string
  ) {}
}

export function getBatteryFill(soc: number): [string, string] {
  if (soc >= 0 && soc < 45) {
    return ['bg-battery-low', 'bg-red-900'];
  }
  if (soc >= 45 && soc < 75) {
    return ['bg-battery-medium', 'bg-yellow-900'];
  }
  if (soc >= 75 && soc <= 100) {
    return ['bg-battery-high', 'bg-green-900'];
  }
  throw Error("Props 'soc' out of bounds");
}
