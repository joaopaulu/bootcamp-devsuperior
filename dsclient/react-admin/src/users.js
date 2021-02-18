import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="cpf" />
      <TextField source="picture" />
      <TextField source="income" />
      <TextField source="birthDate" />
      <TextField source="children" />
    </Datagrid>
  </List>
);
