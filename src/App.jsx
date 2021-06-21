import { useState, useEffect } from 'react'
import { Container, Row, Col } from "bootstrap-4-react";
import image from "./img/PngItem_2019567.png";
import styled from "@emotion/styled";
import axios from 'axios'
import Formulario from "./components/Formulario/Formulario";
import Quote from "./components/Quote/Quote";
import Spinner from './components/Spinner/Spinner';

const Images = styled.img`
  max-width: 70%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: rgb(197, 197, 197) !important;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 50px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: rgb(117, 72, 153);
    display: block;
  }
`;

const App = () => {

  const [coin, setCoin] = useState("")
  const [crypto, setCrypto] = useState("")
  const [result, setResult] = useState({})
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    const geturl = async () => {
      if (coin === "") return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
      const result = await axios.get(url)

      setSpinner(true);

      setTimeout(() => {
        setSpinner(false);
      }, 3000);

      setResult(result.data.DISPLAY[crypto][coin])
    }
    geturl();
  }, [coin, crypto])

  const showSpinner = (spinner) ? <Spinner /> : <Quote result={result} />

  return (
    <Container>
      <div className="mt-5">
        <Row>
          <Col sm="12" md="6">
            <div>
              <Images src={image} alt="about" />
            </div>
          </Col>
          <Col sm="12" md="6">
            <div>
              <Heading>Cryptocurrency quote</Heading>
              <Formulario
                setCoin={setCoin}
                setCrypto={setCrypto}
              />
            </div>
          </Col>
        </Row>
        {showSpinner}
      </div>
    </Container>
  );
};

export default App;
