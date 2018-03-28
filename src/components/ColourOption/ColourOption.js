import React from 'react'
import { SwatchesPicker } from 'react-color';

import Option from '../Option/Option';

const ColourOption = ({handleChange, ...rest}) => (
  <Option {...rest}>
    <SwatchesPicker onChange={handleChange} />
  </Option>
);

export default ColourOption;
