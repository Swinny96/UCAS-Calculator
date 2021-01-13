import React, { useContext } from "react";
import styled from "styled-components";

import { SaladContext } from "./SaladMaker";

export default function SaladSummary() {
  const { salad } = useContext(SaladContext);
  return (
    <Wrapper>
      <h2>Your Salad</h2>
      <List>
        {salad.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: black solid 1px;
  display: flex;
  padding: 25px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 50px;

  & li {
    width: 100px;
  }
`;
