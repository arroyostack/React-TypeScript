import { Counter } from "./components/useState/Counter";
import { TimeFather } from "./components/useEffect+useRef/TimeFather";
import { User } from "./components/useState/User";
import { UseReducerCounter } from "./components/useReducer/UseReducerCounter";




function App() {
  return (
    <>
      <Counter />
      <hr />
      <User />
      <br />
      <h2>useStateEffect = useRef</h2>
      <hr />
      <TimeFather />
      <hr />
      <UseReducerCounter />
    </>
  );
}

export default App;
