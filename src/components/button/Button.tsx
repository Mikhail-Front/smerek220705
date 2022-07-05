import { useEffect } from 'react';
import './Button.css';

function Button({ onClick }: { onClick: () => void }) {
  useEffect(() => {
    const timeout = setInterval(() => {
      onClick();
    }, 30000);

    return () => clearInterval(timeout);
  }, [onClick]);

  return (
    <button className="button" onClick={onClick}>
      New Data
    </button>
  );
}

export default Button;
