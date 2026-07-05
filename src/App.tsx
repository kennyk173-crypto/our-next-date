import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const reunion = new Date("2026-07-29T19:00:00");
  const [now, setNow] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const remainingTime = reunion.getTime() - now.getTime();

  const seconds = remainingTime / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  const remainderHours = (days - Math.floor(days)) * 24;
  const remainderMinutes = ((hours - Math.floor(hours)) * 60);
  const remainderSeconds =  (minutes - Math.floor(minutes)) * 60;




  return (

    <div>
    <h1>❤️ Our Next Date ❤️</h1>

    <h2>{Math.floor(days)} Days</h2>

    {/* <h2>{days} Days</h2> */}

    {/* <h2>{hours} Hours</h2> */}
    <h2>{Math.floor(remainderHours)} Hours</h2>

    {/* <h2>{minutes} Minutes</h2> */}
    <h2>{Math.floor(remainderMinutes)} Minutes</h2>

    {/* <h2>{seconds} Seconds</h2> */}
    <h2>{Math.floor(remainderSeconds)} Seconds</h2>

    {/* <h2>{remainingTime}</h2> */}
</div>
    
  );
}

export default App;

