import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCoin from "../../hooks/useCoin";
import useCrypto from "../../hooks/useCrypto";
import Error from "../Error/Error"
import axios from "axios";
import PropTypes from "prop-types";

const Buttonstyled = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ setCoin, setCrypto }) => {
  const [listcryto, setListcrypto] = useState([]);
  const [error, setError] = useState(false);

  const options = [
    { code: "USD", name: "Dolar de Estados Unidos" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Libra Esterlina" },
  ];

  const [coin, SelectOne] = useCoin("Elige tu moneda", "", options);
  const [crypto, SelectCrypto] = useCrypto(
    "Elige una cryptomoneda",
    "",
    listcryto
  );

  useEffect(() => {
    const getApi = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const result = await axios.get(url);
      setListcrypto(result.data.Data);
    };

    getApi();
  }, []);

  const CuoteCurrency = (e) => {
    e.preventDefault();
    if (coin === "" || crypto === "") {
      setError(true);
      return;
    }
    setError(false);
    setCoin(coin);
    setCrypto(crypto);
  };

  return (
    <form onSubmit={CuoteCurrency} className="mb-3">

      {error ? <Error message="Todos los campos son obligatorios" /> : null}

      <SelectOne />
      <SelectCrypto />
      <Buttonstyled type="submit" value="CALCULAR" />
    </form>
  );
};

Formulario.propTypes = {
  setCoin: PropTypes.func.isRequired,
  setCrypto: PropTypes.func.isRequired
};

export default Formulario;
