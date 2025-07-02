"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import Link from "next/link";

export default function TimeCounter() {
  const [duration, setDuration] = useState({ years: 0, months: 0, days: 0 });
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

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

  return (
    <div>
      <div ref={ref} className="text-xl font-medium leading-relaxed">
        <p className="text-center">My Activity</p>
        {/* wakatime activity */}
        <div className="flex justify-center my-5">
          <Link href="https://wakatime.com/@c147a387-bdfb-4149-bf5f-56eb0432af87">
            <Image
              width={300}
              height={300}
              src="https://wakatime.com/badge/user/c147a387-bdfb-4149-bf5f-56eb0432af87.svg"
              alt="Total time coded since Aug 17 2023"
            />
          </Link>
        </div>
        <div>
          {inView && (
            <div className="text-5xl space-y-4 flex flex-col md:flex-row justify-center gap-10">
              {/* years */}
              <div className="p-8 border shadow bg-neutral-400/5 backdrop-blur-md rounded-md">
                <p className="flex flex-col items-center">
                  <span>
                    <CountUp
                      key={`year-${Date.now()}`}
                      end={duration.years}
                      duration={1.2}
                      delay={0.3}
                    />
                  </span>
                  <span>Year{duration.years !== 1 && "s"}</span>
                </p>
              </div>

              {/* months */}
              <div className="p-8 border shadow bg-neutral-400/5 backdrop-blur-md rounded-md">
                <p className="flex flex-col items-center">
                  <span>
                    <CountUp
                      key={`month-${Date.now()}`}
                      end={duration.months}
                      duration={1.2}
                      delay={0.6}
                    />
                  </span>
                  <span>Month{duration.months !== 1 && "s"}</span>
                </p>
              </div>

              {/* days */}
              <div className="p-8 border shadow bg-neutral-400/5 backdrop-blur-md mb-4 rounded-md">
                <p className="flex flex-col items-center">
                  <span>
                    <CountUp
                      key={`day-${Date.now()}`}
                      end={duration.days}
                      duration={1.2}
                      delay={0.9}
                    />
                  </span>
                  <span>Day{duration.days !== 1 && "s"}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
