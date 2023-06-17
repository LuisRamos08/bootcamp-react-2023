import {useState} from "react";

const useCounter = (initialState = 0) => {
  const [counter, setCounter] = useState(initialState);

  const handleSubtract = () => {
    setCounter((prev) => prev - 1);
  };
  const handleAdd = () => {
    setCounter((prev) => prev + 1);
  };

  return {
    counter,
    handleSubtract,
    handleAdd,
  };
};

export default useCounter;
