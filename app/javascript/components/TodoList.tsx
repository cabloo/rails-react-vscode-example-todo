import React from "react";
import { Todo } from "../data/todo";
import TodoListEntry from "./TodoListEntry";

const TodoList = ({
  onDelete,
  todos,
}: {
  onDelete: (todo: Todo) => any;
  todos: Array<Todo>;
}) => (
  <ul>
    {todos.map((todo) => (
      <li key={String(todo.id)}>
        <TodoListEntry todo={todo} onDelete={onDelete} />
      </li>
    ))}
    {/* <li><CreateTodoEntry onCreate={onCreate} /></li> */}
  </ul>
);

export default TodoList;
