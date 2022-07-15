import React, { useState } from "react";
import "./reactapp.css";
import { AiFillFileAdd } from "react-icons/ai";
const Reactapp = () => {
  const [value, setvalue] = useState("");
  const [array, setarray] = useState([]);

  const input = (e) => {
    setvalue(e.target.value);
  };
  const submit = () => {
    setarray([...array, value]);
    setvalue(" ");
  };
  const delItem = (index) => {
    array.splice(index, 1); //1 means remove one item only
    setarray([...array]);
  };

  return (
    <div className="main">
      <div className="todo d-flex justify-content-center align-item-center py-3">
        <span className="logo d-flex align-items-center">
          <AiFillFileAdd />
        </span>
        <h1>TODO LIST</h1>
      </div>
      <div className="container">
        <div className="add">
          <input
            type="text"
            placeholder="   Add Items"
            value={value}
            onChange={input}
          />
          <button
            type="button"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "27px",
              width: "80px",
            }}
            onClick={submit}
          >
            <b>ADD</b>
          </button>
        </div>
      </div>
      <div className=" my-5 py-3 container">
        {array.map((item, index) => (
          <div key={index} className="row d-flex justify-content-center my-3">
            <div
              className="col-lg-8 col-5 text-white "
              style={{ textTransform: "capitalize" }}
            >
              {index + 1}.&nbsp; {item}
            </div>
            <div className="col-lg-1 col-1 ">
              <button
                className="btn-success"
                onClick={() => {
                  delItem(index);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reactapp;
