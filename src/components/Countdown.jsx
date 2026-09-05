import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function useTimer(deadline, interval = SECOND) {
  const [timespan, setTimespan] = useState(new Date(deadline) - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan((_timespan) => _timespan - interval);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return {
    days: Math.max(Math.floor(timespan / DAY), 0),
    hours: Math.max(Math.floor((timespan / HOUR) % 24), 0),
    minutes: Math.max(Math.floor((timespan / MINUTE) % 60), 0),
    seconds: Math.max(Math.floor((timespan / SECOND) % 60), 0)
  };
}


export default function Information() {
  const { days, hours, minutes, seconds } = useTimer("2025-02-07T22:00:36.004Z");

  return(

        <motion.div
        initial={{  opacity: 0, y:20 }}
        whileInView={{ opacity: 100, y:0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: .5  }}
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mt-5 text-white">
          <div className="rounded-[26.812px] backdrop-blur-[19.5px] h-[120px] w-[120px] bg-[url('/spark-web-2025/faqback.svg')] flex justify-center items-center flex-col">
            <h1 className="text-4xl font-poppin">{days}</h1>
            <span className="text-md font-poppin">Days</span>
          </div>
          
          <div className="rounded-[26.812px] backdrop-blur-[19.5px] h-[120px] w-[120px] bg-[url('/spark-web-2025/faqback.svg')] flex justify-center items-center flex-col">
            <h1 className=" text-4xl font-poppin">{hours}</h1>
            <span className="text-md font-poppin">Hours</span>
          </div>
          <div className="rounded-[26.812px] backdrop-blur-[19.5px] h-[120px] w-[120px] bg-[url('/spark-web-2025/faqback.svg')] flex justify-center items-center flex-col">
            <h1 className=" text-4xl font-poppin">{minutes}</h1>
            <span className=" text-md font-poppin">Minutes</span>
          </div>
          <div className="rounded-[26.812px] backdrop-blur-[19.5px] h-[120px] w-[120px] bg-[url('/spark-web-2025/faqback.svg')] flex justify-center items-center flex-col">
            <h1 className=" text-4xl font-poppin" suppressHydrationWarning>{seconds}</h1>
            <span className="text-md font-poppin">Seconds</span>
          </div>
        </motion.div>
      
  )
}