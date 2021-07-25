import "./App.css";
import CSVReader from "react-csv-reader";
import React, { useState } from "react";

import Geocodelat from "./Geocodelat";
import SpecifyColums from "./SpecifyColums";
import "semantic-ui-css/semantic.min.css";
function App() {
  const [value, setValue] = useState([]);
  const [cattegoryRow, setCattegoryRow] = useState("");

  function DissplayWords(value) {
    if (value !== undefined) {
      return value.map((value, index) => {
        return (
          <div className="singleRecord" key={value}>
            {index + 1} position : {value}
          </div>
        );
      });
    } else {
      return (
        <div>
          <div className="singleRecord"></div>
          <div className="singleRecord"></div>
          <div className="singleRecord"></div>
          <div className="singleRecord"></div>
          <div className="singleRecord"></div>
        </div>
      );
    }
  }
  function onFileLoaded(data, fileInfo) {
    if (data.length >= 20) {
      return;
    }

    var dict = [];

    data.forEach((element) => {
      dict.push(element);
    });
    setValue(dict);
  }
  function handleCattegory(cattegoryRow) {
    setCattegoryRow(cattegoryRow);
  }

  const papaparseOptions = {
    skipEmptyLines: true,
  };
  return (
    <div className="App">
      <h1>Select csv file</h1>
      <CSVReader onFileLoaded={onFileLoaded} parserOptions={papaparseOptions} />

      <SpecifyColums
        DissplayWords={DissplayWords}
        data={value}
        onCattegoryFound={handleCattegory}
      ></SpecifyColums>
      <Geocodelat addresses={value} cattegoryRow={cattegoryRow}></Geocodelat>
    </div>
  );
}

export default App;
