import React, { useEffect, useState } from 'react'

const App = () => {

  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const [isPaused, setIsPaused] = useState(false);

  const handleTimer = (e) => {
    let value = parseInt(e.target.value) || 0;
    const id = e.target.id;

    if (id == "hours") {
      setHours(value);
    } else if (id == "minutes") {
      setMinutes(Math.min(59, value));
    } else {
      setSeconds(Math.min(59, value));
    }
  }

  const handleStart = () => {
    if (seconds > 0 && minutes >= 0 && hours >= 0) {
      setIsStart(true);
    } else {
      alert("Invalid Input Values");
    }
  }

  const handleReset = () => {
    setIsStart(false);
    setIsPaused(false);
    setHours("");
    setMinutes("");
    setSeconds("");
  }


  useEffect(() => {

    if (!isStart || isPaused) return

    let intervalId;
    intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else if (minutes > 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours((prev) => prev - 1);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(intervalId);
        alert("Timer Finised");
        handleReset()
        return;
      }
    }, 1000)


    return () => {
      clearInterval(intervalId);
    }
  }, [isStart, isPaused, hours, minutes, seconds])


  const handlePaused = () => {
    setIsPaused(true);
  }

  const handleResume = () => {
    setIsPaused(false);
  }

  return (
    <div className='max-w-4xl mx-auto my-8 flex flex-col items-center gap-4'>
      <h1 className="text-2xl">Countdown Timer</h1>
      {
        !isStart && (
          <>
            <div className='flex items-center gap-4'>
              <input
                type="number"
                id="hours"
                onChange={handleTimer}
                value={hours}
                min={0}
                max={23}
                placeholder='HH'
                className='w-15 aspect-square outline-1 text-center'
              />
              <input
                type="number"
                id="minutes"
                onChange={handleTimer}
                value={minutes}
                min={0}
                max={59}
                placeholder='MM'
                className='w-15 aspect-square outline-1 text-center'
              />
              <input
                type="number"
                id="seconds"
                onChange={handleTimer}
                value={seconds}
                min={0}
                max={59}
                placeholder='SS'
                className='w-15 aspect-square outline-1 text-center'
              />
            </div>
            <button
              onClick={handleStart}
              className='bg-green-800 text-lg w-16 h-8 text-white cursor-pointer rounded-sm'
            >
              Start
            </button>
          </>
        )
      }
      {
        isStart && (
          <>
            <h1 className='text-5xl'>
              <span>{hours < 10 ? `0${hours}` : hours}</span> :
              <span>{minutes < 10 ? `0${minutes}` : minutes}</span> :
              <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            </h1>
            <div className='flex items-center gap-6'>
              {
                !isPaused &&
                <button
                  className='bg-blue-800 text-lg w-20 h-8 text-white cursor-pointer rounded-sm'
                  onClick={handlePaused}
                >
                  Pause
                </button>
              }

              {
                isPaused &&
                <button
                  className='bg-blue-800 text-lg w-20 h-8 text-white cursor-pointer rounded-sm'
                  onClick={handleResume}
                >
                  Resume
                </button>
              }

              <button
                className='bg-red-800 text-lg w-16 h-8 text-white cursor-pointer rounded-sm'
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </>
        )
      }
    </div>
  )
}

export default App