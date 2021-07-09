import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux";
import alertify from "alertifyjs";

const Todo = () => {
  const { todos } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const { removeTodo, doneTodo, getTodos } = bindActionCreators(
    actions,
    dispatch
  );

  useEffect(() => {
    getTodos();
  }, []);

  const removeTodoHandler = ({ id, article }) => {
    removeTodo(id);
    alertify.error(`${article} removed`, 1);
  };

  const doneTodoHandler = ({ id, article }) => {
    doneTodo(id);
    alertify.error(`${article} doned`, 1);
  };
  if (todos.length > 0) {
    return (
      <div className="d-flex flex-column">
        <div className="text-center">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="d-flex justify-content-between align-content-center p-3"
            >
              <p
                className="lead"
                style={todo.done ? { textDecoration: "line-through" } : {}}
              >
                {todo.article}
              </p>
              <div className="buttons">
                <button
                  className="btn btn-success me-2"
                  onClick={() => doneTodoHandler(todo)}
                  disabled = {todo.done}
                >
                  Done
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeTodoHandler(todo)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <p className="lead">You haven't todo</p>
      </div>
    );
  }
};

export default Todo;
