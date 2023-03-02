import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        created by{" "}
        <a
          href="https://github.com/matintorkian/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Matin Torkian
        </a>
      </div>
    </div>
  );
}

export default App;
