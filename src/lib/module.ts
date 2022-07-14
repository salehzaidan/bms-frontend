export interface ModuleData {
  chart_current: {
    timestamp: string;
    value: number;
  }[];
  chart_soc: {
    timestamp: string;
    value: number;
  }[];
  chart_temperature: {
    timestamp: string;
    value: number;
  }[];
  chart_voltage: {
    timestamp: string;
    value: number;
  }[];
}
