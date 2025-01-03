import Counter from "./components/Counter/Counter";
import CounterConfig from "./components/Counter/CounterConfig";

function App() {
  return (
    <>
      <h1>Practice 30.12.2024</h1>
      <hr />
      <Counter initialValue={5} step={3} />
      {/* <CounterConfig /> */}
    </>
  );
}

export default App;
