// import { create } from 'react-test-renderer'
// import App from '../App'

import axios from "axios";
const text = ["banana", "manzana"]

// test("Debe contener un texto", () => {
//   expect(text).toMatch(/quoute/);
// })

// test("Debe ser mayor a cero", () => {
//   expect(text).toMatch(/quoute/);
// })

// 1 - crear un test que falle (RED)

// 2 - crear lo minimo necesario para que el test pase (GREEN)

// 3 - REFACTORS (clean code, code smells)

describe("App snapshot", () => {

  test("array", () => {
    expect(text.length).toEqual(2)
  })

  test("array2", () => {
    expect(text).toContain("manzana")
  })

  test("array3", () => {
    expect(text.length).toBeGreaterThan(0)
  })

  test("array4", () => {
    expect(text).toBeTruthy()
  })

})

describe("Reverse", () => {

  const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
  }

  test("Reverse1", () => {
    reverseString("Hola", (str) => {
      expect(str).toBe("aloH")
    })
  })

})

describe("Async - Await", () => {

  test("Test-1", async () => {

    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
    const result = await axios.get(url);
    expect(result).not.toBeNull()

  })

})

// test("comprobar el snapshot del App", () => {
//   // const app = create(<App/>)
// })

// import React from 'react'
// import { render } from '@testing-library/react'

// import Formulario from '../components/Formulario/Formulario'

// import { configure, shallow } from 'enzyme'
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17'


// configure({ adapter: new Adapter() })

// describe("Product-page", () => {

//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<App />);
//   })

//   test("firts", () => {
//     console.log(wrapper.debug())
//   })

//   test("second", () => {
//     expect(wrapper.find('div').text()).tobe("0")
//   })

// })


