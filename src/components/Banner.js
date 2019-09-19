import React from "react"
import styled from "styled-components"
const Container = styled.div`
  background: url(https://lafka.althemist.com/wp-content/uploads/2019/06/back-landing-hero1.jpg?id=265);
  background-attachment: fixed !important;
  background-position: center top !important;
  background-size: cover;
  .top {
    margin-top: 40px;
    margin-bottom: 60px;
  }
`
const Clr = styled.h3`
  color: #fdc866;
`
const Size = styled.h1`
  font-size: 4rem;
`
const Btn1 = styled.a`
  background-color: #afc93e;
  color: #ffffff;
  transition: 0.5s all ease-out;
  margin-right: 5px;
  &:hover {
    background-color: #22272d;
    color: #ffffff;
  }
`
const Btn2 = styled.a`
  background-color: #ffffff;
  color: #333333;
  transition: 0.5s all ease-out;
  margin-left: 5px;
  &:hover {
    background-color: #22272d;
    color: white;
  }
`
const Left = styled.i`
  margin-right: 7px;
`
export default () => (
  <Container>
    <div className="columns">
      <div className="column has-text-centered">
        <img
          className=""
          src="https://lafka.althemist.com/wp-content/uploads/2019/06/logo-lafka-shop-white-180x180.png"
        />
        <Clr>
          {" "}
          <h3 className="is-size-3 has-text-weight-bold">
            ONLINE FAST FOOD ORDERING
            <br /> WOOCOMMERCE THEME FOR SELLING
          </h3>
        </Clr>
        <Size>
          <h1 className="has-text-white has-text-weight-bold">
            EATS, TREATS & SWEATS
          </h1>
        </Size>
        <span className="is-size-5 has-text-weight-bold has-text-grey-light">
          Lafka is based on a deep industry research and it’s core features are
          consulted with
          <br /> real-life local fast food business owners to provide the best
          tools for online food ordering
          <br /> websites like Burger Shops, Pizzeria, Bakery, Street Food,
          Sushi etc.
        </span>
        <div className="top">
          {" "}
          <Btn1 className="button is-rounded ">
            {" "}
            <Left>
              {" "}
              <i className="fas fa-shopping-basket"></i>
            </Left>{" "}
            Purchase Naw
          </Btn1>
          <Btn2 className="button is-rounded ">
            <Left>
              {" "}
              <i className="fas fa-question"></i>
            </Left>
            Get Support{" "}
          </Btn2>
        </div>
      </div>
    </div>
  </Container>
)
