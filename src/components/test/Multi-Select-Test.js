import React, { useState, useCallback, useMemo } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// makeAnimated creates animated wrappers around components passed in as arguments.
// If no arguments are passed, builtin components are wrapped instead.
const animatedComponents = makeAnimated();

function MyMulti() {
  // predefined options, where "Banana" and "Orange" are fixed options
  const options = useMemo(
    () => [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
      { value: "berry", label: "Berry" },
    ],
    []
  );

  // styles that do not show 'x' for fixed options
  const styles = useMemo(
    () => ({
      multiValueRemove: (base, state) => {
        return state.data.isFixed ? { ...base, display: "none" } : base;
      },
    }),
    []
  );

  // sort options with alphabet order
  const orderByLabel = useCallback(
    (a, b) => a.label.localeCompare(b.label),
    []
  );

  // listed fixed options first and then the delete-able options
  const orderOptions = useCallback(
    (values) =>
      values
        .filter((v) => v.isFixed)
        .sort(orderByLabel)
        .concat(values.filter((v) => !v.isFixed).sort(orderByLabel)),
    [orderByLabel]
  );

  // selected values, initially it lists all options in order
  const [value, setValue] = useState(orderOptions(options));

  // handler for changes
  const handleChange = useCallback(
    (inputValue, { action, removedValue }) => {
      switch (action) {
        case "remove-value": // delete with 'x'
        case "pop-value": // delete with backspace
          if (removedValue.isFixed) {
            setValue(orderOptions([...inputValue, removedValue]));
            return;
          }
          break;
        case "clear": // clear button is clicked
          setValue(options.filter((v) => v.isFixed));
          return;
        default:
      }
      setValue(inputValue);
    },
    [options, orderOptions]
  );

  return (
    <div>
      <Select
        isMulti // show multiple options
        components={animatedComponents} // animate builtin components
        isClearable={value.some((v) => !v.isFixed)} // clear button shows conditionally
        styles={styles} // styles that do not show 'x' for fixed options
        options={options} // all options
        value={value} // selected values
        onChange={handleChange} // handler for changes
      />
    </div>
  );
}

export default MyMulti;
