import React, { useState, useEffect } from 'react';
import { BiSolidCircle } from "react-icons/bi";
import { MdDone } from "react-icons/md";

const ProgressBar = ({ formNumber }) => {
  const [activeCircles, setActiveCircles] = useState(0);

  useEffect(() => {
    // Set active circles with delay
    const timer = setTimeout(() => {
      setActiveCircles(formNumber);
    }, 1000);

    // Clean up the timer when component unmounts or formNumber changes
    return () => clearTimeout(timer);
  }, [formNumber]);

  return (
    <div className="relative w-[60%] flex justify-around items-center left-5">
      <div className="absolute h-1.5 bottom-0 bg-slate-400 w-full"></div>
      <div
        className={`absolute h-1.5 bottom-0 bg-primary transition-all duration-1000`}
        style={{
          right: '0%',
          width:
            formNumber === 1
              ? '0%'
              : formNumber === 2
              ? '25%'
              : formNumber === 3
              ? '50%'
              : formNumber === 4
              ? '75%'
              : '100%',
        }}
      ></div>
      {[1, 2, 3, 4, 5].map((step) => (
        <div
          key={step}
          className={`absolute h-10 w-10 rounded-full border-2 transition-all duration-1000 ${
            activeCircles >= step
              ? 'border-primary bg-primary'
              : 'border-slate-500 bg-white'
          } flex justify-center items-center z-40`}
          style={{ right: `${(step - 1) * 25}%`, top: '-24px' }}
        >
          {activeCircles >= step ? (
            <MdDone className="text-white" size={30} />
          ) : (
            <BiSolidCircle
              className={`${
                activeCircles === step ? 'text-primary' : 'text-slate-500'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
