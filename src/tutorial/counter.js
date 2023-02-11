import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  // const handleCounter = (tmp) => {
  //   return tmp
  //     ? setCounter(counter + 1)
  //     : setCounter(counter - 1 === -1 ? 0 : counter - 1);
  // };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>Klik Tombol ini dong</h3>
        {/* <button onClick={() => handleCounter(true)}>Klik Dong +</button> */}
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Klik Dong +
        </button>
        <h3>{counter}</h3>
        {/* <button onClick={() => handleCounter(false)}>Klik Dong -</button> */}
        <button
          onClick={() => {
            setCounter(counter - 1 === -1 ? 0 : counter - 1);
          }}
        >
          Klik Dong -
        </button>
      </div>
    </>
  );
}
