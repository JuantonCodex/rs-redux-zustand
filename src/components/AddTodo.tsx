import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

export function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleCreateTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(add(todo));
  };

  return (
    <form onSubmit={handleCreateTodo}>
      <input
        type="text"
        placeholder="Novo to-do"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
