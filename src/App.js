import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./tutorial/react-router-dom/About";
import Categories from "./tutorial/react-router-dom/Categories";
// import ComponentProps from "./tutorial/components&props";
// import Counter from "./tutorial/counter";
// import FetchData from "./tutorial/fetchDataApi";
// import Todolist from "./tutorial/todolist";
// import StateManagement from "./tutorial/useState&useEffect";
import Home from "./tutorial/react-router-dom/Home";

function App() {
  return (
    <>
      {/* Pembelajaran sebelumnya */}
      {/* <Counter />
      <ComponentProps />
      <StateManagement />
      <FetchData /> */}
      {/* <Todolist /> */}

      {/* Kita buat navigasinya */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>

      {/* ROUTER atau di bilang adalah path dari website */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Membuat Nested Route child dari about, maka categories akan jadi anak dari about,\
          dan kita harus mempertahankan isi dipsay about ketika dia mendirect ke categories, agak
          display aboutnya tidak hilang, dengan menggunakan fungsu Outlet di Parent About
        */}
        <Route path="about" element={<About />}>
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
