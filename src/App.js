import React from 'react';
import {RiTimerLine} from 'react-icons/ri'
import './App.css';

function App() {
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
             <p>45</p>
             <p><small>Days</small></p>
           </section>
           <span>:</span>
           <section>
             <p>45</p>
             <p><small>Hours</small></p>
           </section>
           <span>:</span>
           <section>
             <p>45</p>
             <p><small>Minutes</small></p>
           </section>
           <span>:</span>
           <section>
             <p>45</p>
             <p><small>Seocnds</small></p>
           </section>
         </div>
       </section>
     </section>
  );
}

export default App;
