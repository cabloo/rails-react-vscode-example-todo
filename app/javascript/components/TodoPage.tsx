import React, { useCallback, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import api from "../data/api";
import { LoadList, Todo } from "../data/todo";
import TodoList from "./TodoList";

const TodoPage = () => {
  const [todos, setTodos] = useState(Array<Todo>());
  const reloadTodos = useCallback(() => {
    return LoadList().then(setTodos);
  }, [setTodos]);
  const deleteTodo = useCallback(
    (todo: Todo) => {
      return api.delete(todo.url).then(reloadTodos);
    },
    [reloadTodos]
  );
  useEffect(() => reloadTodos().cancel, []);
  return (
    <Container>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </Container>
  );
};

export default TodoPage;
