import React from 'react'
import DynamicSelect from 'react-dynamic-select'
 
export default ({ options, selectedValue, onChange }) =>
  <DynamicSelect options={options} value={selectedValue} onChange={onChange} />