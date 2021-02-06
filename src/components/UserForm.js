import React from "react";
import "../app.css";

export default function UserForm(props) {
  return (
    <div className="form">
      <form className="form-container" onSubmit={props.getUser}>
        <input
          className="input"
          type="text"
          placeholder="UserName"
          name="user"
        />
        <button className="sbtn">Submit</button>
      </form>
    </div>
  );
}
