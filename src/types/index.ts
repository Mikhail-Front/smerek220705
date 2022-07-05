export type chartsData = {
  name: string;
  time: number;
};

export interface extendedChartsData extends chartsData {
  position: number;
}
