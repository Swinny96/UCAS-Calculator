import React from "react";
import SaladItem from "./SaladItem";
import styled from "styled-components";

const ingredients = [
  {
    image: "🍎",
    name: "apple",
  },
  {
    image: "🥑",
    name: "avocado",
  },
  {
    image: "🥦",
    name: "broccoli",
  },
  {
    image: "🥕",
    name: "carrot",
  },
  {
    image: "🍷",
    name: "red wine dressing",
  },
  {
    image: "🍚",
    name: "seasoned rice",
  },
];

export default function SaladBuilder() {
  return (
    <Wrapper>
      {ingredients.map((ingredient) => (
        <SaladItem
          key={ingredient.name}
          image={ingredient.image}
          name={ingredient.name}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px 50px;
    justify-content: center;
`;