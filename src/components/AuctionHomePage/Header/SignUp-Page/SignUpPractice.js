import React, { useState, useRef } from "react";

export const UserForm = (props) => {
  const [user, setUser] = useState({ name: "", password: "" });
  const [show, setShow] = useState(false);
  const form = useRef(null);
  const [el, setEl] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(e, "e");
      fetch('/api', { method: 'POST', body: user })
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
      <input type="submit" name="Sign Up" />
      {
          show && (
            <>
              {user?.name && <p>{user?.name}</p>}
              {user?.password && <p>{user?.password}</p>}
            </>
          )
      }
    </form>
  );
};
