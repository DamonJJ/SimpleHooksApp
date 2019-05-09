import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <>
      <UserList />
      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("todos")}>Todos</button>
      <ResourceList resource={resource} />
    </>
  );
};

export default App;
