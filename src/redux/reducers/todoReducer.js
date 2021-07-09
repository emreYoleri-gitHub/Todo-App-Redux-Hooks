const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  let localStorageValue = JSON.parse(localStorage.getItem("todos"));
  if (!localStorageValue) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };

    case "ADD_TODO":
      let newTodo = {
        id: Math.random(),
        article: action.payload,
        done: false,
      };

      localStorage.setItem(
        "todos",
        JSON.stringify([...localStorageValue, newTodo])
      );

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case "REMOVE_TODO":
      let newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };

    case "DONE_TODO":
      let findTodo = state.todos.find((todo) => todo.id === action.payload);
      let filterTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      let findTodoFromLocalStorage = localStorageValue.filter(
        (todo) => todo.id !== action.payload
      );
      let filterTodosFromLocalStorage = localStorageValue.find(
        (todo) => todo.id === action.payload
      );
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...findTodoFromLocalStorage,
          {
            ...filterTodosFromLocalStorage,
            done: !filterTodosFromLocalStorage.done,
          },
        ])
      );
      return {
        ...state,
        todos: [...filterTodos, { ...findTodo, done: !findTodo.done }],
      };

    default:
      return state;
  }
};

export default todoReducer;
