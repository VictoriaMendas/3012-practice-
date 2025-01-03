import { useState } from "react";

const Counter = ({ initialValue = 0, min = 0, max = 10, step = 1 }) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    setCounter(counter + step);
  };
  const decrement = () => {
    setCounter(counter - step);
  };
  const isDecrementDisabled = counter <= min;
  const isIncrementDisabled = counter >= max;
  return (
    <div>
      <button type="button" disabled={isDecrementDisabled} onClick={decrement}>
        -
      </button>
      <span>{counter}</span>
      <button type="button" disabled={isIncrementDisabled} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
// Обмежити мождивість зміни стейту каунтер при умовах досягнення лічильника крайніх значень(ьін ьіч)
// Зробити так щоб знаення лічильника не виходило за крайне значення
