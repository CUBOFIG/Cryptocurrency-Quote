import React, { Fragment, useState } from "react";
import { Label, Select } from '../components/Adds/Adds'
import PropTypes from "prop-types";

const useCoin = (label, initialState, options) => {
  const [state, setChangestate] = useState(initialState);

  const SelectOne = () => (
    <Fragment>
      <Label className="mr-2 label__color">{label}</Label>

      <Select className="select__color" onChange={(e) =>
        setChangestate(e.target.value)} value={state}>

        <option className="select__color" value="sd">--- Seleccionar ---</option>

        {options.map((option) => (

          <option key={option.code} value={option.code}>
            {option.name}
          </option>

        ))}

      </Select>
    </Fragment>
  );

  return [state, SelectOne, setChangestate];
};

useCoin.propTypes = {
  label: PropTypes.string.isRequired,
  initialState: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};


export default useCoin;
