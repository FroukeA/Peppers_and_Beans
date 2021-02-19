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
      {/* common */}
      <Header
        content={header__content}
        createElement={createElement}
        createClass={createClass}
      />

      <main className="main" id="services">
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </main>



      {/* common */}
      < Footer
        content={footer__content}
        createElement={createElement}
        createClass={createClass}
      />
    </div >
  );
}