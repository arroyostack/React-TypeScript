import { Counter } from "./components/Counter";
import { TimeFather } from "./components/TimeFather";
import { User } from "./components/User";
import { useState } from 'react';



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
    </>
  );
}

export default App;
