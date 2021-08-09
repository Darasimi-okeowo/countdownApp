import React, {useRef,useEffect,useState} from 'react';
import {RiTimerLine} from 'react-icons/ri'
import './App.css';

function App() {
  const [timerDays,setTimerDays] = useState('00')
  const [timerHours,setTimerHours] = useState('00')
  const [timerMinutes,setTimerMinutes] = useState('00')
  const [timerSeconds,setTimerSeconds] = useState('00')

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('December 9, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now  = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0){
        //stop the timer
        clearInterval(interval.current)
      }else{
        //update timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000);
  }

  //componentdidmount
  useEffect(() => {
    startTimer();
    return() => {
      clearInterval(interval.current);
    }
  })


  return (
     <section className="timer-container">
       <section className="timer">
         <div className="one">
           <span className="timer-icon"><RiTimerLine/></span>
           <h2>COUNTDOWN TIMER</h2>
           <p>your life starts as soon as you see this</p>
         </div>
         <div className="two">
           <section>
             <p>{timerDays}</p>
             <p><small>Days</small></p>
           </section>
           <span>:</span>
           <section>
             <p>{timerHours}</p>
             <p><small>Hours</small></p>
           </section>
           <span>:</span>
           <section>
             <p>{timerMinutes}</p>
             <p><small>Minutes</small></p>
           </section>
           <span>:</span>
           <section>
             <p>{timerSeconds}</p>
             <p><small>Seconds</small></p>
           </section>
         </div>
       </section>
     </section>
  );
}

export default App;
