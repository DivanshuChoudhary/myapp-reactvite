import { useState } from "react";
import Profile from "./Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Student Profiles</h1>

      <Profile name="Divanshu" course="B.Tech" />
      <Profile name="Rahul" course="BCA" />
      <Profile name="Aman" course="BSc" />

      <hr />

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;