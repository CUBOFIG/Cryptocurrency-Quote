import React from 'react'
import styled from '@emotion/styled'
import { Row, Col, Card } from "bootstrap-4-react";
import PropTypes from "prop-types";

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;

  @media screen and (max-width: 575px) {
  text-align: center;
  }
`;

const Divv = styled.span`
  padding: 0.2rem;
  border: 2px #301b3a solid;
  border-radius: 0.5rem;
  background-color: #41415934 !important;
`
const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Price = styled.p`
    font-size: 25px;
    span {
        font-weight:bold;
    }
`
const LastUpdate = styled.p`
    font-size: 15px;
    color: #969696;
    span {
        font-weight:bold;
    }
`
const Images = styled.img`
  max-width: 60%;
`;

const Quote = ({ result }) => {

  if (Object.keys(result).length === 0) return null;

  return (
    <div className="mt-5">
      <Card
        text='light'
        className="mb-2 background">
        <Row >
          <Col sm="4" md="6" className="d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center mt-2 mb-2">
              <Images src={`https://www.cryptocompare.com${result.IMAGEURL}`} alt="urlimage" />
            </div>
          </Col>
          <Col sm="8" md="6">
            <ResultadoDiv className="mt-2 mb-2 ml-2">
              <Price>Precio: <Divv>{result.PRICE}</Divv> </Price>
              <Info>El precio más bajo del dia:  <span>{result.LOWDAY}</span></Info>
              <Info>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></Info>
              <Info>El precio más alto del dia: <span>{result.HIGHDAY}</span></Info>
              <LastUpdate>Ultima actualización: <span>{result.LASTUPDATE}</span></LastUpdate>
            </ResultadoDiv>
          </Col>
        </Row>
      </Card >
    </div >
  )
}

Quote.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Quote
