import React from "react";
import ReactDOM from "react-dom";
import AppNav from "../components/AppNav";
import TodoPage from "../components/TodoPage";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <>
      <AppNav />
      <TodoPage />
    </>,
    document.body.appendChild(document.createElement("div"))
  );
});
