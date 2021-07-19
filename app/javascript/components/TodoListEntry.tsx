import React from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { Todo } from "../data/todo";

const TodoListEntry = ({
  onDelete,
  todo,
}: {
  onDelete: (todo: Todo) => any;
  todo: Todo;
}) => (
  <span>
    {todo.name}{" "}
    <a onClick={() => onDelete(todo)}>
      <CloseButton />
    </a>
  </span>
);

export default TodoListEntry;
