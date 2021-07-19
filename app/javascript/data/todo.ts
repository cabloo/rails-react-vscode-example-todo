import CancelablePromise from "cancelable-promise";
import api from "./api";

export const LoadList = (): CancelablePromise<Array<Todo>> => {
  return api.get("/todos").then((response) => {
    return response.json();
  });
};

export type Todo = {
  id: Number;
  name: string;
  url: string;
};
