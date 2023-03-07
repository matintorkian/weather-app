import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="geneva" />
        <footer className="footer">
          This project is coded by Matin Torkian and is available on{" "}
          <a
            href="https://github.com/matintorkian/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
