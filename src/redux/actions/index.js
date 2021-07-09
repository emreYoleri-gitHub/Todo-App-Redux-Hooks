export const getTodos = ()=> dispatch => {
  dispatch({
    type : "GET_TODOS",
    payload : JSON.parse(localStorage.getItem("todos"))
  })
}

export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: "ADD_TODO",
    payload: todo,
  });
};

export const removeTodo = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_TODO",
    payload: id,
  });
};

export const doneTodo = (id) => (dispatch) => {
  dispatch({
    type: "DONE_TODO",
    payload: id,
  });
};
