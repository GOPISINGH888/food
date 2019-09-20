import React from "react"
import styled from "styled-components"
import Props from "./Props"
const Wrap = styled.div``
export default () => (
  <div className="container">
    <Wrap>
      <div className="columns">
        <div className="column is-multiline is-7 is-offset-one-quarter">
          <Props
            heading="6 PRE-MADE WEBSITES"
            smalltext="Choose from 6 demo designs and tons of custom built industry features
          like product add-ons, nutrition guides and flexible menus."
          />
        </div>
      </div>
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/landing-home-1.jpg"
            headtext="MAIN DEMO"
            smalltext="Fast Food chain demo website with online food ordering and all 
          theme features enabled."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/landing-home-2.jpg"
            headtext="BURGER DEMO"
            smalltext="Premium Burger Shop demo website with online food ordering enabled and no static menu."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/landing-home-3.jpg"
            headtext="PIZZA DEMO"
            smalltext="Classic Pizza restaurant & buffet demo website with online food ordering."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/landing-home-4.jpg"
            headtext="FOOD TRUCK DEMO"
            smalltext="A simple street food & catering demo website with static menu and no online food ordering."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/landing-home-5.jpg"
            headtext="BAKERY DEMO"
            smalltext="Artisan Bakery demo website with online food ordering and static product menu."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/landing-home-6.jpg"
            headtext="SUSHI DEMO"
            smalltext="A simple One Page Sushi demo website without online ordering enabled and static menu list."
          />
        </div>
      </div>
    </Wrap>
  </div>
)
