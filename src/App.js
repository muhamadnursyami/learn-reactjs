import "./App.css";
import ComponentProps from "./tutorial/components&props";
import Counter from "./tutorial/counter";
import FetchData from "./tutorial/fetchDataApi";
import Todolist from "./tutorial/todolist";
import StateManagement from "./tutorial/useState&useEffect";

function App() {
  return (
    <>
      {/* <Counter />
      <ComponentProps />
      <StateManagement />
      <FetchData /> */}
      <Todolist />
    </>
  );
}

export default App;
