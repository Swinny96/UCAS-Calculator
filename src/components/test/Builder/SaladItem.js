import React, { useReducer, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import UserContext from "./User/User";
import { SaladContext } from "./SaladMaker";


const reducer = (key) => key + 1;
export default function SaladItem({ image, name }) {
  const { setSalad } = useContext(SaladContext);
  const user = useContext(UserContext);
  const favorite = user.favorites.includes(name);
  const [id, updateId] = useReducer(reducer, 0);
  function update() {
    setSalad({
      name,
      id: `${name}-${id}`,
    });
    updateId();
  }
  return (
    <Wrapper>
      <h3>{name}</h3>
      <Favorite aria-label={favorite ? "Favorite" : "Not Favorite"}>
        {favorite ? "😋" : ""}
      </Favorite>
      <Add onClick={update}>
        <Image role="img" aria-label={name}>
          {image}
        </Image>
      </Add>
    </Wrapper>
  );
}

SaladItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  border: lightgrey solid 1px;
  margin: 20px;
  padding: 25;
  position: relative;
  text-align: center;
  text-transform: capitalize;
  width: 200px;
`;
const Favorite = styled.span`
  font-size: 20px;
  position: absolute;
  top: 10;
  right: 10;
`;
const Add = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const Image = styled.span`
  font-size: 80px;
`;
