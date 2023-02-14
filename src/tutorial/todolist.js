import React, { useState } from "react";

export default function Todolist() {
  // State untuk menampung onchangenya
  const [activityOnchange, setActivityOnChange] = useState("");
  // state untuk  memasukan data acitivitnya kedalam array supaya biisa menamping lebih banyak
  const [edit, setEdit] = useState({});
  const [todo, setTodo] = useState([]);
  const [message, setMessage] = useState("");
  //Memiliki dua fungsi yang 1 menambahkan yang 2 edit.
  const handleSave = (e) => {
    // supaya browser tidak realod ketika mensubmit
    e.preventDefault();

    if (!activityOnchange) return setMessage("Isi Dong bang !!");
    setMessage("");
    if (edit.id) {
      // Jika ada idnya maka kita buat object baru
      const updateTodo = {
        ...todo,
        activityOnchange,
      };
      // setelah itu kita harus cari index keberapa yang kita edit, didalam state todo
      const updateTodoIndex = todo.findIndex((td) => {
        // kemudian kita bandingkan id dari todo dengan edit dari todo.
        return edit.id === td.id;
      });
      // sebelum ituu kita harus clone terlebih dahulu, state todonya
      const setUpdateTodo = [...todo];

      //  setUpdateTodo sudah memiliki array seperti todo, kemudiam masukan index nya dan valua
      // yang telah di edit.
      setUpdateTodo[updateTodoIndex] = updateTodo;
      // terus kita masukan

      setTodo(setUpdateTodo);
      return handleCancel();
      // console.log(updateTodoIndex);
    }

    // disini kita mengekstark array todonya kemudia kita masukan array yang sudah di ekstak
    // dengan isi value dari activityOnchange  menggunakan spreadOperator, ilustrasinya todo mencopy data dari activyonchange
    // ingin membuat id dengan waktu. kita masukan kedalam object
    setTodo([...todo, { id: Date.now(), activityOnchange, ceklis: false }]);
    // disini setelah di sumbit, makan inputonchangenya di kosongkan kembali
    // note : di inputnya harus diberikan value={activityOnchange} supaya inputan tersebut
    // bergantung di state activityonchange tidak bergantung di internal nodenya.
    setMessage("");
    setActivityOnChange("");
  };
  //   Ambil onchangenya
  const handleChange = (e) => {
    setActivityOnChange(e.target.value);
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
    //  supaya ketika di klik delete mode edit nya kehapus
    handleCancel();
  };

  const handleEdit = (todo) => {
    // kita ambil nilai todo, kedalam kolo inputan, onchange nya
    setActivityOnChange(todo.activityOnchange);
    setEdit(todo);
    // console.log(edit);
  };

  const handleCancel = () => {
    // ketika tombol cancel di klik , kita kembali setEditnya ke default statenya yaitu  empty object {}
    setEdit({});
    // kita kososngkan onchangenya
    setActivityOnChange("");
  };

  const handleCeklis = (td) => {
    const ceklisUpdate = {
      ...td,
      ceklis: td.ceklis ? false : true,
    };
    const indexTodoState = todo.findIndex((todoIndex) => {
      return td.id === todoIndex.id;
    });

    const updateTodoCeklis = [...todo];
    updateTodoCeklis[indexTodoState] = ceklisUpdate;
    // console.log(ceklisUpdate);
    setTodo(updateTodoCeklis);
  };
  return (
    <>
      <div className="parentTodoList">
        <h3>Todo list</h3>
        {message}
        <form onSubmit={handleSave}>
          <input type="text" value={activityOnchange} onChange={handleChange} />
          <button type="submit">
            {edit.id ? "Simpan Perubahan" : "tambah aku dong "}
          </button>
          {edit.id && <button onClick={handleCancel}>batal</button>}
        </form>
        {todo.length > 0 ? (
          <ul>
            {todo.map((todo) => {
              return (
                <>
                  <li key={todo.id}>
                    <input
                      type="checkbox"
                      checked={todo.ceklis}
                      onChange={handleCeklis.bind(this, todo)}
                    />
                    {todo.ceklis ? (
                      <strike>{todo.activityOnchange}</strike>
                    ) : (
                      todo.activityOnchange
                    )}
                    ({todo.ceklis ? "Selesai" : "belum selesai"})
                    <button onClick={handleEdit.bind(this, todo)}>edit</button>
                    <button onClick={handleDelete.bind(this, todo.id)}>
                      delete
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        ) : (
          <p> data kosong</p>
        )}
      </div>
    </>
  );
}
