import React from "react"
import styled from "styled-components"
const Select = styled.div`
  background: #333333
    url(https://lafka.althemist.com/wp-content/uploads/2019/06/back-big-blackboard-rep.jpg?id=101) !important;
  background-position: 0 0 !important;
  background-repeat: repeat !important;
  .clr {
    color: #fdc866;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  .top {
    margin-top: 2rem;
  }
`
const Bimg = styled.div`
  background: url(https://lafka.althemist.com/wp-content/uploads/2019/06/vintage-burst2-light.png?id=234);
  background-repeat: no-repeat;
  background-size: 20rem;
  background-position: center;
  margin-top: 1rem;
  .logo {
    color: #fdc866;
    padding-top: 5srem;
    font-size: 5rem;
  }
`
const Btn1 = styled.a`
  margin-top: 3rem;
  background-color: #afc93e;
  color: #ffffff;
  transition: 0.5s all ease-out;
  margin-right: 5px;
  &:hover {
    background-color: #22272d;
    color: #ffffff;
  }
`
const Left = styled.a``
export default () => (
  <Select>
    <p className="is-size-1 has-text-white has-text-centered has-text-weight-bold">
      READY TO BOOST
    </p>
    <p className="is-size-1 has-text-white has-text-centered has-text-weight-bold">
      YOUR FAST FOOD BUSINESS?
    </p>
    <p className="is-size-5 has-text-centered clr">BUY YOUR LICENSE FOR JUST</p>
    <Bimg>
      <h2 className="logo has-text-weight-bold has-text-centered">$52</h2>
    </Bimg>
    <p className="has-text-centered is-size-5 has-text-weight-bold top">
      You’ll also get the world famous WPBakery Page Builder and Revolution
      Slider plugins
    </p>
    <p className="has-text-centered is-size-5 has-text-weight-bold">
      for FREE, plus lifetime FREE UPDATES and over $300 worth of custom
      features.
    </p>
    <div className="has-text-centered">
      <Btn1 className="button is-rounded ">
        {" "}
        <Left>
          {" "}
          <i className="fas fa-shopping-basket"></i>
        </Left>{" "}
        Purchase Naw
      </Btn1>
    </div>
  </Select>
)
