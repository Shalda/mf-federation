export interface Chart {
  time: string;
  valueA: string;
  valueB: string;
  valueC: string;
}
export type ChartKeys = keyof Chart;
