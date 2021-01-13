import React, { useContext } from "react";
import styled from "styled-components";

import UserContext from "./User/User";

export default function Navigation() {
  const user = useContext(UserContext);
  return <Header>Welcome, {user.name}</Header>;
}

const Header = styled.div`
  outline: black solid 1px;
  padding: 15px 10px;
  text-align: right;
`;