import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/`)
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div>
        <h1>{data}</h1>
      </div>
    </div>
  );
}

export default App;
