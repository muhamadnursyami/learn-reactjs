import React from "react";
import SButton from "../components/SButton";
import SForm from "../components/SForm";
import STabel from "../components/STabel";

export default function ComponentProps() {
  const data = [
    {
      name: "Muhamad Nur Syami",
      age: "19 ",
      student: "UMRAH",
    },
    {
      name: "Joko Widodo",
      age: "12 ",
      student: "ITB",
    },
  ];
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Contoh 1</h2>
        <SForm name={"name"} password={"password"} />
        <SButton />
        <h2>Contoh 2</h2>

        <STabel />
        {data.map((dt) => (
          <>
            <tr>
              <td>{dt.name}</td>
              <td>{dt.age}</td>
              <td>{dt.student}</td>
            </tr>
          </>
        ))}
      </div>
    </>
  );
}
