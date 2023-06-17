import useCounter from "../hooks/useCounter";

const Counter = () => {
//   const { counter, handleAdd, handleSubtract } = useCounter(10);
  const counterA = useCounter(10);
  const counterB = useCounter(20);

  return (
    <>
      <h2>Counter</h2>

      <div>
        <h1>{counterA.counter}</h1>
        <div>
          <button onClick={counterA.handleSubtract}>-</button>
          <button onClick={counterA.handleAdd}>+</button>
        </div>
      </div>
      <div>
        <h1>{counterB.counter}</h1>
        <div>
          <button onClick={counterB.handleSubtract}>-</button>
          <button onClick={counterB.handleAdd}>+</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
