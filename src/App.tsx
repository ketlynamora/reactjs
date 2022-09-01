import { useState } from "react";
import { Title } from "./components/Title";

// let count = 0;

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Title color="red" variant="md">
        Aprendendo React.js
      </Title>
      <p>Contador de clicks: {count}</p>
      <button onClick={(e) => setCount(count + 1)}>Me clique!!!</button>
      <button onClick={(e) => setCount(0)}>Zera click!</button>
    </div>
  );
}

export default App;
