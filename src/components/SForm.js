import React from "react";

export default function SForm({ name, password }) {
  return (
    <div>
      <br />
      <form>
        <label>{name}</label>
        <input type="text" />
        <br />
        <br />
        <label>{password}</label>
        <input type="password" />
      </form>
    </div>
  );
}
