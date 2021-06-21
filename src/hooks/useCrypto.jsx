import React, { Fragment, useState } from "react";
import { Label, Select } from '../components/Adds/Adds'
import PropTypes from "prop-types";

const useCrypto = (label, initialState, options) => {
  const [state, setChangestate] = useState(initialState);

  const SelectCrypto = () => (
    <Fragment>
      <Label className="mr-2 label__color">{label}</Label>
      <Select className="select__color" onChange={(e) =>
        setChangestate(e.target.value)} value={state}>

        <option className="select__color" value="sd">--- Seleccionar ---</option>

        {options.map((option) => (

          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>

        ))}

      </Select>
    </Fragment>
  );

  return [state, SelectCrypto, setChangestate];
};

useCrypto.propTypes = {
  label: PropTypes.string.isRequired,
  initialState: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default useCrypto;
