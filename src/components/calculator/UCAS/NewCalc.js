import React from "react";
import repositoryReducer from "./reducer/repositoryReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import styled from "styled-components";
const store = createStore(repositoryReducer, applyMiddleware(thunk));

function NewCalc() {
  return (
    <PageContainer>
      <Provider store={store}></Provider>
    </PageContainer>
  );
}

export default NewCalc;

const PageContainer = styled.div`
  margin: 30px;
`;
