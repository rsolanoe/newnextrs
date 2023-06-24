"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

const CartCounter = ({ value = 10 }: Props) => {
  const [count, setCount] = useState<number>(value);

  const handleCounter = (num: number) => {
    setCount((prevC) => prevC + num);
  };

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-2">
        <button
          onClick={() => handleCounter(-1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] active:scale-105"
        >
          -1
        </button>
        <button
          onClick={() => handleCounter(1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] active:scale-105"
        >
          +1
        </button>
      </div>
    </>
  );
};

export default CartCounter;
