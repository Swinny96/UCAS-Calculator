import React, { useReducer } from "react";
import styled from "styled-components";
import QualficationSelect from "./QuaficationTest";
import Qualfications from "./Qualfications";

const courses = [
  {
    course: "A Level",
    grade: "A*",
    gradeValue: 56,
  },
  {
    course: "BTEC",
    grade: "D*",
    gradeValue: 56,
  },
];

const lookup = {
  int: [
    { id: "1", text: "1" },
    { id: "2", text: "2" },
    { id: "3", text: "3" },
    { id: "4", text: "4" },
    { id: "5", text: "5" },
  ],
  abc: [
    { id: "a", text: "a" },
    { id: "b", text: "b" },
    { id: "c", text: "c" },
    { id: "d", text: "d" },
    { id: "e", text: "e" },
  ],
  ALevel: [
    { id: "56", text: "A*" },
    { id: "48", text: "A" },
    { id: "40", text: "B" },
    { id: "32", text: "C" },
    { id: "24", text: "D" },
    { id: "16", text: "E" },
  ],
  BTEC: [
    { id: "56", text: "D*" },
    { id: "48", text: "D" },
    { id: "32", text: "M" },
    { id: "16", text: "P" },
  ],
};
const currencyOptions = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

function getTotal(cart) {
  const total = cart.reduce(
    (totalCost, item) => totalCost + item.gradeValue,
    0
  );
  return total.toLocaleString(undefined, currencyOptions);
}

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.course];
    case "remove":
      const courseIndex = state.findIndex(
        (item) => item.course === action.course.course
      );
      if (courseIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(courseIndex, 1);
      return update;
    default:
      return state;
  }
}

export default function Course() {
  const [cart, setCart] = useReducer(cartReducer, []);

  function add(course) {
    setCart({ course, type: "add" });
  }

  function remove(course) {
    setCart({ course, type: "remove" });
  }

  return (
    <Wrapper>
      <Cart>
        Total Courses Added: <MyTotal>{cart.length}</MyTotal> total items.
      </Cart>
      <Total>
        Total UCAS Points: <MyTotal>{getTotal(cart)}</MyTotal>
      </Total>

      <Container>
        {courses.map((courses) => (
          <List key={courses.course}>
            <Food>
              <span role="img" aria-label={courses.name}>
                {courses.course}
              </span>
            </Food>
            <QualficationSelect onClick={() => add(courses)}/>
            <Button onClick={() => add(courses)}>Add</Button>
            <Button onClick={() => remove(courses)}>Remove</Button>
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
const Select = styled.select`
  border-radius: 10px;
  margin-right: 10px;
  background: white;
  border-color: red;
  font-weight: 600;
`;
