"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [

   
   
    "--blue-400",
    "--blue-500",
    "--blue-600",
    "--blue-700",
    "--blue-800",
    "--blue-900",
   
  

   
    
   
  
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        padding: 0,
        margin: 0,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      <svg width="0" height="0">
        <defs>
          <linearGradient id="box-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {/* Modify the stop colors here for your desired gradient */}
            <stop offset="0%" style={{ stopColor: "var(--pink-500)", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "var(--green-600)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "var(--blue-600)", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      {rows.map((_, i) => (
        <motion.div
          key={`row${i}`}
          className="w-16 h-8 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col${j}`}
              className="w-16 h-8 border-r border-t border-slate-700 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
