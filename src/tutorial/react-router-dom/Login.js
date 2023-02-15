import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handlerLogin = (e) => {
    e.preventDefault();

    const login = true;

    if (login) {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div>Halaman Login</div>
      <form onSubmit={handlerLogin}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>login</button>
      </form>
    </>
  );
}
