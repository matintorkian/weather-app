import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        created by{" "}
        <a
          href="https://github.com/matintorkian/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Matin Torkian
        </a>
      </header>
    </div>
  );
}

export default App;
