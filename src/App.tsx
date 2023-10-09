import { Counter } from "./components/useState/Counter";
import { TimeFather } from "./components/useEffect+useRef/TimeFather";
import { User } from "./components/useState/User";
import { UseReducerCounter } from "./components/useReducer/UseReducerCounter";
import { FormStateSimple } from "./components/customHooks/FormStateSimple";
import { FormCustomHook } from "./components/customHooks/FormCustomHook";




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
      <hr />
      <h2>Custom Hooks</h2>
      <FormStateSimple />
      <br />
      <hr />
      <FormCustomHook />
    </>
  );
}

export default App;
