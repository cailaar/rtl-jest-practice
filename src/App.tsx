import React from "react";
import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

export type UserProps = {
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<UserProps[]>([]);

  const onUserAdd = (user: UserProps) => {
    if (user.name && user.email) {
      setUsers([...users, user]);
    }
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
