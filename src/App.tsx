import './App.css'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
// import type { PlannedDate } from './types/PlannedDate';

function App() {

  // const videos = [
  //   "/videos/mov1.mp4",
  //   "/videos/mov2.mp4",
  //   "/videos/mov3.mp4",
  //   "/videos/mov4.mp4",
  //   "/videos/movcenter.mp4"
  // ];

  // const [currentVideo, setCurrentVideo] = useState(0);
  

  const selectedDate = new Date("2026-07-29T19:00:00");
  const [now, setNow] = useState(new Date());


  useEffect(() => {

    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const remainingTime = selectedDate.getTime() - now.getTime();

  const seconds = remainingTime / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  const remainderHours = (days - Math.floor(days)) * 24;
  const remainderMinutes = ((hours - Math.floor(hours)) * 60);
  const remainderSeconds =  (minutes - Math.floor(minutes)) * 60;

  // const dates: PlannedDate [] = [
  //   {
  //     name: "Reunion",
  //     place: "Taoyuan International Aiport",
  //     dateTime: new Date("2026-07-29T19:00:00"),
  //   },
  //   {
  //     name: "Beach",
  //     place: "Yilan",
  //     dateTime: new Date("2026-07-31T19:00:00"),
  //   }
  // ];

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.playbackRate = 0.5;
    }
}, []);

  return (

    <div className='container'> 

      {/* <div className='sidebar'>
        <div className = 'date-list'>
      
          <h2>Dates</h2>
          {dates.map((date, index) => (
            <div key = {index}
           
            >
              {date.name}
            </div>
          ))}
       </div>
      </div> */}

      <div className='content'> 
        <div className='content-panel'> 
          <div className="time-label">
            Today is {now.toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
           })}
        </div>
          <div className='time-card'>
          <div className='time-label'>
            Reunion ❤️
            </div>
            </div>

          <video 
            src = "/videos/mov5.MP4"
            ref = {videoRef}
            className='memory-video'
            autoPlay
            muted
            loop
            playsInline
            controls
          />
          <div className = 'countdown'>
            
            <div className="time-card">

                <div className="time-number">
                    {Math.floor(days)}
                </div>

                <div className="time-label">
                    {Math.floor(days) === 1 ? "Day" : "Days"}
                </div>

            </div>

            {/* <h2>{days} Days</h2> */}

            {/* <h2>{hours} Hours</h2> */}
            <div className="time-card">

                <div className="time-number">
                    {Math.floor(remainderHours)}
                </div>

                <div className="time-label">
                    {Math.floor(remainderHours) === 1 ? "Hour" : "Hours"}
                </div>

            </div>

            {/* <h2>{minutes} Minutes</h2> */}
           
          
              <div className="time-card">

                <div className="time-number">
                    {Math.floor(remainderMinutes)}
                </div>

                <div className="time-label">
                    {Math.floor(remainderMinutes) === 1 ? "Minute" : "Minutes"}
                </div>

            </div>  

            {/* <h2>{seconds} Seconds</h2> */}
            <div className="time-card">

                <div className="time-number">
                    {Math.floor(remainderSeconds)}
                </div>

                <div className="time-label">
                    {Math.floor(remainderSeconds) === 1 ? "Second" : "Seconds"}
                </div>

            </div>

          {/* <h2>{remainingTime}</h2> */}
          </div>
          <div className="bottom-info">

              <div className="time-label">
                  July 29, 2026 • 7:00 PM
              </div>

              <div className="time-label">
                  I can't wait to eat dinner
              </div>

          </div>
        </div>
        
      </div>
  </div>
  );
}

export default App;

