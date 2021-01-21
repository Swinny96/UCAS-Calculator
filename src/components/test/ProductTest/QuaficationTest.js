import React, { useReducer } from "react";
import styled from "styled-components";
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

export default function QualficationSelect() {
  const [cart, setCart] = useReducer(cartReducer, []);

  function add(course) {
    setCart({ course, type: "add" });
  }

  function remove(course) {
    setCart({ course, type: "remove" });
  }

  return (
    <div>
      <Total>
        Total UCAS Points: <MyTotal>{getTotal(cart)}</MyTotal>
      </Total>
      <Select>
        {courses.map((courses) => (
          <option key={courses.course} value={courses.gradeValue}>
            {courses.course}
          </option>
        ))}
      </Select>
    </div>
  );
}

const Total = styled.div``;
const MyTotal = styled.strong``;
const Select = styled.select`
  border-radius: 10px;
  margin-right: 10px;
  background: white;
  border-color: red;
  font-weight: 600;
`;
