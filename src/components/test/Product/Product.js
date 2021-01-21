import React, { useReducer } from "react";

import styled from "styled-components";

const products = [
  {
    emoji: "🍦",
    name: "ice cream",
    price: 3,
  },
  {
    emoji: "🍩",
    name: "donuts",
    price: 1.5,
  },
  {
    emoji: "🍉",
    name: "watermelon",
    price: 1,
  },
];

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

function getTotal(cart) {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, currencyOptions);
}

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.product];
    case "remove":
      const productIndex = state.findIndex(
        (item) => item.name === action.product.name
      );
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;
    default:
      return state;
  }
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);

  function add(product) {
    setCart({ product, type: "add" });
  }

  function remove(product) {
    setCart({ product, type: "remove" });
  }

  return (
    <Wrapper>
      <Cart>
        Shopping Cart: <MyTotal>{cart.length}</MyTotal> total items.
      </Cart>
      <Total>
        Total: <MyTotal>£{getTotal(cart)}</MyTotal>
      </Total>

      <Container>
        {products.map((product) => (
          <List key={product.name}>
            <Food>
              <span role="img" aria-label={product.name}>
                {product.emoji}
              </span>
            </Food>
            <Button onClick={() => add(product)}>Add</Button>
            <Button onClick={() => remove(product)}>Remove</Button>
          </List>
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10px 0px;
  font-size: 20px;
`;
const Cart = styled.div``;
const Total = styled.div``;
const MyTotal = styled.strong``;
const Container = styled.div``;
const List = styled.div``;
const Food = styled.div`
  span {
    font-size: 100px;
  }
`;
const Button = styled.button`
  border-radius: 10px;
  margin-right: 10px;
  background: white;
  border-color: red;
  font-weight: 600;
`;
