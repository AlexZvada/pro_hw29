import { useEffect, useState } from "react";
import Button from "./Button";

const Users = () => {
  const [active, setActive] = useState(false);
  const [users, setUsers] = useState();

  const toggle = () => setActive(!active);
  const renderUsers = () => {
    return (
      <ul className="user-list">
        {users.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    const reqest = async () => {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const list = await responce.json();
      setUsers(list);
    };
    reqest();
  }, []);
  return (
    <div className="users">
      <Button onClick={toggle}>{!active ? "Show users" : "Hide users"}</Button>
      {<div>{active ? renderUsers() : null}</div>}
    </div>
  );
};

export default Users;
