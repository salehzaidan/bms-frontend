export interface Value {
  cell_id: number;
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
}

export class Variable {
  static readonly VOLTAGE = new Variable('Voltage', 'V', true);
  static readonly TEMPERATURE = new Variable('Temperature', '&deg;C', false);
  static readonly SOC = new Variable('SoC', '%', false);

  private constructor(
    // @ts-ignore
    readonly label: string,
    // @ts-ignore
    readonly unit: string,
    // @ts-ignore
    readonly space: boolean
  ) {}
}
