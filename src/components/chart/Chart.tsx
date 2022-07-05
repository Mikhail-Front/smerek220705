import { useMemo } from 'react';
import { chartsData, extendedChartsData } from '../../types';
import './Chart.css';

function Chart({ chartsData }: { chartsData: chartsData[] }) {
  const newChartsData = useMemo(
    () =>
      chartsData.reduce(
        (
          acc: {
            data: extendedChartsData[];
            maxTime: number;
          },
          item: chartsData
        ) => {
          acc.data.push({
            position: acc.maxTime,
            ...item
          });

          return {
            maxTime: acc.maxTime + item.time,
            data: acc.data
          };
        },
        { data: [], maxTime: 0 }
      ),
    [chartsData]
  );

  return (
    <div className="chart">
      <h4 className="chart__title">Spent time (seconds)</h4>
      {newChartsData.data.map((data: extendedChartsData) => (
        <div className="chart-block" key={data.name}>
          <div className="chart-block__label">{data.name}</div>
          <div className="chart-block__default">
            <div
              className="time"
              style={{
                width: (data.time * 100) / newChartsData.maxTime + '%',
                left: (data.position * 100) / newChartsData.maxTime + '%'
              }}
            >
              {String(data.time)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chart;
