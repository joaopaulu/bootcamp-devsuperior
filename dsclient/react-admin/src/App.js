import * as React from "react";
import { render } from "react-dom";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { UserList } from "./users";

const App = () =>
  render(
    <Admin dataProvider={simpleRestProvider("http://localhost:8081/clients")}>
      <Resource name="users" list={UserList} />
    </Admin>,
    document.getElementById("root")
  );

export default App;
