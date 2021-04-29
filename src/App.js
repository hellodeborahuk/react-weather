import "./App.css";
import Search from "./Search";
import Current from "./Current";

export default function App() {
  return (
    <div className="container">
      <div className="weather-widget">
        <div className="row">
          <div className="col-6">
            <h1>Weather Forecast</h1>
            <p>Sunday 2nd March 2021, 10:41</p>
          </div>
          <Search />
        </div>
        <Current />
      </div>
      <p className="source-link">
        <a href="https://github.com/hellodeborahuk/react-weather">
          Open-source code
        </a>{" "}
        by Debbie Dann
      </p>
    </div>
  );
}
