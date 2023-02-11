import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  console.log("hellow");
  //   useEffect(() => {
  //     console.log("Hellow");

  //     return () => {
  //       console.log("");
  //     };
  //   }, [counter]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>Klik Tombol ini dong</h3>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Klik Dong +
        </button>
        <h3>{counter}</h3>
        {/* <button
          onClick={() => {
            setCounter(counter - 1 === -1 ? 0 : counter - 1);
          }}
        >
          Klik Dong -
        </button> */}
      </div>
    </>
  );
}
