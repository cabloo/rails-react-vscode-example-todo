import CancelablePromise from "cancelable-promise";

const get = (request: Request | string): CancelablePromise<Response> => {
  const { signal, abort } = new AbortController();

  return new CancelablePromise((resolve, reject, onCancel) => {
    fetch(request, { signal }).then(resolve, reject);
    onCancel(abort);
  });
};

const del = (request: Request | string): CancelablePromise<Response> => {
  const { signal, abort } = new AbortController();

  return new CancelablePromise((resolve, reject, onCancel) => {
    fetch(request, { method: "delete", signal }).then(resolve, reject);
    onCancel(abort);
  });
};

export default { get, delete: del };
