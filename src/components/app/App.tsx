import { useCallback, useState } from 'react';
import Chart from '../chart/Chart';
import Button from '../button/Button';
import { chartsData } from '../../types';
import './App.css';

function App() {
  const [data, setData] = useState<chartsData[]>([
    { name: 'Landing Page', time: 7.4 },
    { name: 'Configurator', time: 0.2 },
    { name: 'Check-out', time: 7.0 },
    { name: 'Deal', time: 3.8 }
  ]);

  const handleClick = useCallback(() => {
    const newArr = [
      {
        name: 'Landing Page',
        time: Number((Math.random() * (10 - 0.1) + 0.1).toFixed(1))
      },
      {
        name: 'Configurator',
        time: Number((Math.random() * (10 - 0.1) + 0.1).toFixed(1))
      },
      {
        name: 'Check-out',
        time: Number((Math.random() * (10 - 0.1) + 0.1).toFixed(1))
      },
      {
        name: 'Deal',
        time: Number((Math.random() * (10 - 0.1) + 0.1).toFixed(1))
      }
    ];

    setData(newArr);
  }, []);

  return (
    <div className="app">
      <Chart chartsData={data} />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
