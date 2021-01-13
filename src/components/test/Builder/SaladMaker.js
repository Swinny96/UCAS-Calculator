import React, { useReducer, createContext } from "react";
import styled from "styled-components";

import SaladBuilder from "./SaladBuilder";
import SaladSummary from "./SaladSummary";

export const SaladContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

export default function SaladMaker() {
  const [salad, setSalad] = useReducer(reducer, []);
  return (
    <SaladContext.Provider value={{ salad, setSalad }}>
      <Wrapper>
        <span role="img" aria-label="salad">
          🥗{" "}
        </span>
        Build Your Custom Salad!
        <span role="img" aria-label="salad">
          {" "}
          🥗
        </span>
      </Wrapper>
      <SaladBuilder />
      <SaladSummary />
    </SaladContext.Provider>
  );
}

const Wrapper = styled.h1`
  text-align: center;
`;
