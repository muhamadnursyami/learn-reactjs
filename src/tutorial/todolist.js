import React, { useState } from "react";

export default function Todolist() {
  // State untuk menampung onchangenya
  const [activityOnchange, setActivityOnChange] = useState("");
  // state untuk  memasukan data acitivitnya kedalam array supaya biisa menamping lebih banyak
  const [todo, setTodo] = useState([]);

  //   Ambil onchangenya
  const handleChange = (e) => {
    setActivityOnChange(e.target.value);
  };

  const handleSubmit = (e) => {
    // supaya browser tidak realod ketika mensubmit
    e.preventDefault();
    // disini kita mengekstark array todonya kemudia kita masukan array yang sudah di ekstak
    // dengan isi value dari activityOnchange  menggunakan spreadOperator, ilustrasinya todo mencopy data dari activyonchange
    // ingin membuat id dengan waktu. kita masukan kedalam object
    setTodo([...todo, { id: Date.now(), activityOnchange: activityOnchange }]);
    // disini setelah di sumbit, makan inputonchangenya di kosongkan kembali
    // note : di inputnya harus diberikan value={activityOnchange} supaya inputan tersebut
    // bergantung di state activityonchange tidak bergantung di internal nodenya.
    setActivityOnChange("");
  };

  // Handle Delete
  // todoId didapat dari argument yang dikirimkan dari button delete
  // dan kita ambil todo dari state, kemudian kita filter  dengan statment
  //  td.id !== todoId, jika td.id berarti kita mengakses todo.id yang ada di state
  // kemudian kita bandingan dia dengan todoId yang kita click tombol.
  // jika td.id tidak sama dengan todoId, maka kita akan kembalikan nilai dia,
  // nah perlu di pahami, nah jika td.id === todoId maka dia akan keluar dari array yang
  // di ekstark oleh filter, kenapa? karena yang kita cari di state adalah yang !==, jika ==
  // maka dia akan keluar dari array yang di ekstarkk oleh function filter.
  const handleDelete = (todoId) => {
    const result = todo.filter((td) => {
      // cara debug supaya lebih ngerti
      // console.log(td.id, todoId);
      return td.id !== todoId;
    });
    setTodo(result);
  };
  return (
    <>
      <div className="parentTodoList">
        <h3>Todo list</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={activityOnchange} onChange={handleChange} />
          <button type="submit">tambah aku dong</button>
        </form>
        <ul>
          {todo.map((todo) => {
            return (
              <>
                <li key={todo.id}>
                  {todo.activityOnchange}
                  <button onClick={handleDelete.bind(this, todo.id)}>
                    delete
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
