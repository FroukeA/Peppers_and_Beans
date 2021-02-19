// data
import React, { useState } from "react";

import {
  header__content,
  footer__content,
} from "../../constants/conf";

// functions
import { createElement } from "../../utils/common/setup/commonUtils.js";
import { createClass } from "../../utils/data/dataStyling";

// style
import "../../assets/style/base/app.scss";

// components
// --- common ---
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";

export default function App() {
  // const [weatherData, setWeatherData] = useState({ loading: true, weatherContent: {}, forecastContent: {} });

  // function handleData(element, data) {
  //   setWeatherData({
  //     ready: false,
  //     [element]: data
  //   })
  // }

  // createDataElement(forecast__content, handleData.bind(this))

  return (
    <div className="App">
      <div className="container">
        {/* common */}
        <Header
          content={header__content}
          createElement={createElement}
          createClass={createClass}
        />



        {/* common */}
        < Footer
          content={footer__content}
          createElement={createElement}
          createClass={createClass}
        />
      </div >
    </div >
  );
}
