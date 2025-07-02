"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function TimeCounter() {
  const [duration, setDuration] = useState({ years: 0, months: 0, days: 0 });
  const [countKey, setCountKey] = useState(0); // used to re-trigger animation
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    const startDate = new Date("2023-08-23");

    const calculateDuration = () => {
      const now = new Date();
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setDuration({ years, months, days });
    };

    calculateDuration();
  }, []);

  useEffect(() => {
    if (inView) {
      // Trigger new CountUp animation by changing key
      setCountKey((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <div ref={ref} className="text-xl font-medium leading-relaxed">
      <div className="border-2 shadow p-4 rounded-xl">
        <div className="text-5xl space-y-4 gap-10">
          {/* Year */}
          <div className="p-8 hover:shadow duration-500 bg-neutral-400/5 backdrop-blur-md rounded-md">
            <p className="flex flex-col items-center">
              <span>
                <CountUp
                  key={`year-${countKey}`}
                  end={duration.years}
                  duration={1.2}
                  delay={0.3}
                />
              </span>
              <span>Year{duration.years !== 1 && "s"}</span>
            </p>
          </div>

          {/* Month */}
          <div className="p-8 hover:shadow duration-500 bg-neutral-400/5 backdrop-blur-md rounded-md">
            <p className="flex flex-col items-center">
              <span>
                <CountUp
                  key={`month-${countKey}`}
                  end={duration.months}
                  duration={1.2}
                  delay={0.6}
                />
              </span>
              <span>Month{duration.months !== 1 && "s"}</span>
            </p>
          </div>

          {/* Day */}
          <div className="p-8 hover:shadow duration-500 bg-neutral-400/5 backdrop-blur-md rounded-md">
            <p className="flex flex-col items-center">
              <span>
                <CountUp
                  key={`day-${countKey}`}
                  end={duration.days}
                  duration={1.2}
                  delay={0.9}
                />
              </span>
              <span>Day{duration.days !== 1 && "s"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
