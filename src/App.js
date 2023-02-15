import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./tutorial/react-router-dom/About";
import Blog from "./tutorial/react-router-dom/Blog";
import BlogDetail from "./tutorial/react-router-dom/BlogDetail";
import Categories from "./tutorial/react-router-dom/Categories";
import Dashboard from "./tutorial/react-router-dom/Dashboard";
// import ComponentProps from "./tutorial/components&props";
// import Counter from "./tutorial/counter";
// import FetchData from "./tutorial/fetchDataApi";
// import Todolist from "./tutorial/todolist";
// import StateManagement from "./tutorial/useState&useEffect";
import Home from "./tutorial/react-router-dom/Home";
import Login from "./tutorial/react-router-dom/Login";
import NotFound from "./tutorial/react-router-dom/NotFound";

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
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* Membuat Nested Route child dari about, maka categories akan jadi anak dari about,\
          dan kita harus mempertahankan isi dipsay about ketika dia mendirect ke categories, agak
          display aboutnya tidak hilang, dengan menggunakan fungsu Outlet di Parent About
        */}

        <Route path="about" element={<About />}>
          <Route path="categories" element={<Categories />} />
        </Route>
        {/*   Penggunaakn url Params */}
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        {/* Penggunaan URL yang nggak ada di route kamu */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
