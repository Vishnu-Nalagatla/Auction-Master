import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'

export const UserForm = (props) => {
  const [user, setUser] = useState({ name: "", password: "" });
  const [show, setShow] = useState(false);
  const form = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    console.log(e, "e");
      fetch('/signup', { method: 'POST', body: user })
        .then(res => res.json())
        .then(json => setUser(json.user))
    setShow(true);
  };

  return (
    <form ref={form} onSubmit={submit}>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="user[name]"
        defaultValue={user?.name}
      />

      <input
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        name="user[password]"
        defaultValue={user?.password}
      />
      <Link to="/">
      <button type="submit" name="SignUp" >Submit</button>
      </Link>
      {/* {
          show && (
            <>
              {user?.name && <p>{user?.name}</p>}
              {user?.password && <p>{user?.password}</p>}
            </>
          )
      } */}
    </form>
  );
};
