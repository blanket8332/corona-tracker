import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from './App.module.scss'

class App extends React.Component {
  render() {
    return (
      <div>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
