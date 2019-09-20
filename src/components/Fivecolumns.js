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
            heading="POWERFUL PRODUCT LAYOUTS"
            smalltext="Choose between 3 gallery types, custom upp-sell products section and related products."
          />
        </div>
      </div>
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/prod-landing1.jpg"
            headtext="SIMPLE IMAGE LIST"
            smalltext="Single column gallery with lightbox functionality."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/prod-landing2.jpg"
            headtext="WOO GALLERY"
            smalltext="Default WooCommerce gallery with lightbox slideshow."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/prod-landing3.jpg"
            headtext="MOSAIC GALLERY"
            smalltext="Multi-column gallery with lightbox slideshow."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/upsell-landing1.jpg"
            headtext="UPSELL PRODUCTS"
            smalltext="Custom Upp-sells section."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/crossl-landing1.jpg"
            headtext="CROSS-SELLS"
            smalltext="Cross sells on cart page."
          />
        </div>
      </div>
    </Wrap>
  </div>
)
