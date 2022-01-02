const BASE_URL = "http://localhost:3002/";

export const all = async () => {
  const res = await fetch(`${BASE_URL}todos`);
  const todos = await res.json();
  return todos;
};

export const store = async (body) => {
  console.log(body);
  const res = await fetch(`${BASE_URL}store`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const todo = await res.json();
  return todo;
};

export const getById = async (id) => {
  const res = await fetch(`${BASE_URL}show/${id}`);
  const todo = await res.json();
  return todo;
};

export const updateTodo = async (id, body) => {
    const res = await fetch(`${BASE_URL}update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    const todo = await res.json();
    return todo;
};

export const deleteTodo = async (id) => {
    const res = await fetch(`${BASE_URL}delete/${id}`, {method:'DELETE'});
    const todo = await res.json();
    return todo;
  };
  
