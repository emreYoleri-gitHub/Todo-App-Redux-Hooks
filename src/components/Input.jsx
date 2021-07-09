import React, { useState } from "react";
import { useDispatch } from "react-redux";
import alertify from "alertifyjs";
import { bindActionCreators } from "redux";
import { todoActions } from "../redux/actions/index";

const Input = () => {
  const [inpValue, setInpValue] = useState("");

  const dispatch = useDispatch();
  const { addTodo } = bindActionCreators(todoActions, dispatch);
  const clickHandler = () => {
    if (inpValue.length) {
      alertify.success(`${inpValue} yapılacaklar listesine eklendi`, 1);
      addTodo(inpValue);
      setInpValue("");
    } else {
      alertify.error("Lütfen metin içeriğini doldurunuz.", 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-center ">
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Write Todo"
                value={inpValue}
                onChange={(e) => setInpValue(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={clickHandler}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
