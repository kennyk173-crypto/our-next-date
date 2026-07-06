import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  // const videos = [
  //   "/videos/mov1.mp4",
  //   "/videos/mov2.mp4",
  //   "/videos/mov3.mp4",
  //   "/videos/mov4.mp4",
  //   "/videos/movcenter.mp4"
  // ];

  // const [currentVideo, setCurrentVideo] = useState(0);
  

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

    <div className='container'> 

      <div className='sidebar'>

      <h2>Dates</h2>
      <p>Aquarium</p>
      <p>Dinner</p>
      <p>Hiking</p>
      </div>

      <div className='content'> 
      <h1>❤️ Our Next Date ❤️</h1>

      <video src = "/videos/movcenter.MP4"
        className='memory-video'
        autoPlay
        muted
        loop
        playsInline
        controls
      />

      <h2>{Math.floor(days)} {Math.floor(days) == 1 ? "Day" : "Days"}</h2>

      {/* <h2>{days} Days</h2> */}

      {/* <h2>{hours} Hours</h2> */}
      <h2>{Math.floor(remainderHours)} {Math.floor(remainderHours) == 1 ? "Hour" : "Hours"}</h2>

      {/* <h2>{minutes} Minutes</h2> */}
      <h2>{Math.floor(remainderMinutes)} {Math.floor(remainderMinutes) == 1 ? "Minute" : "Minutes"}</h2>

      {/* <h2>{seconds} Seconds</h2> */}
      <h2>{Math.floor(remainderSeconds)} {Math.floor(remainderSeconds) == 1 ? "Second" : "Seconds"} </h2>

      {/* <h2>{remainingTime}</h2> */}
    </div>
  </div>
    
  );
}

export default App;

