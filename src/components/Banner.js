import React from "react"
import styled from "styled-components"
const Container = styled.div`
  background: url(https://lafka.althemist.com/wp-content/uploads/2019/06/back-landing-hero1.jpg?id=265);
  background-attachment: fixed !important;
  background-position: center top !important;
  background-size: cover;
`
export default () => (
  <Container>
    <div className="columns">
      <div className="column has-text-centered">
        <img
          className=""
          src="https://lafka.althemist.com/wp-content/uploads/2019/06/logo-lafka-shop-white-180x180.png"
        />
        <h3>ONLINE FAST FOOD ORDERING WOOCOMMERCE THEME FOR SELLING</h3>
        <h1>EATS, TREATS & SWEATS</h1>
        <span>
          Lafka is based on a deep industry research and it’s core features are
          consulted with real-life local fast food business owners to provide
          the best tools for online food ordering websites like Burger Shops,
          Pizzeria, Bakery, Street Food, Sushi etc.
        </span>
      </div>
    </div>
  </Container>
)
