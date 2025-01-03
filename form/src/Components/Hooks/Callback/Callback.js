import { useCallback, useMemo, useState } from "react";
import Todos from "./Todos";

export const Callback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    // const calculation = expensiveCalculation(count);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    const increment = () => {
      setCount((c) => c + 1);
    };
    // const addTodo = () => {
    //   setTodos((t) => [...t, "New Todo"]);
    // };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
      }, [todos]);
  


    return (
      <>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        {calculation}
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
  };

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };