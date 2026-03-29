import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px]",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
            backgroundColor: "#4ade80",
            boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.063)",
            transform: "rotate(215deg)",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "1px",
              backgroundImage: "linear-gradient(to right, #166534, transparent)",
            }}
          />
        </span>
      ))}
    </>
  );
};
