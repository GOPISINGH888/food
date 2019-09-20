import React from "react"
import Props from "./Props"
import styled from "styled-components"
const Containor = styled.div`
  background: #f8f8f7
    url(https://lafka.althemist.com/wp-content/uploads/2019/06/concrete-wall.png?id=99);
  .clr {
    padding-top: 5rem;
    color: #e1970d;
  }
  .gclr {
    color: #999999;
    margin-top: 20px;
  }
  .top {
    margin-top: 6rem;
  }
  .gap {
    margin-top: 2rem;
  }
`
export default () => (
  <Containor>
    <div className="container">
      <div className=" has-text-centered">
        <p className=" is-size-5 has-text-weight-bold clr">
          UNIQUE, INDUSTRY-DRIVEN
        </p>
        <span className="has-text-black-bis is-size-1 has-text-weight-bold">
          BUILT-IN FEATURES
        </span>
        <p className="is-size-6 has-text-weight-bold gclr">
          No third-party plugins required, no extra costs. Lafka offers <br />
          tailor made features you won’t find in another theme.
        </p>
        <p className="has-text-black-bis is-size-2 has-text-weight-bold top">
          CUSTOMIZABLE PRODUCTS
        </p>
      </div>
      <div className="columns has-text-centered is-variable is-8 gap">
        <div className="column">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/prod-landing555.jpg"
            headtext="PRODUCT ADD-ONS"
            smalltext="Add whatever options you need to your product, set prices for each 
            option, make it required or optional, global, category based or on per-product basis."
          />
        </div>
        <div className="column">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/prod-landing444.jpg"
            headtext="PRODUCT BUILDER"
            smalltext="Create fully customizable products. Set base price and add options,
             or even zero price and build on that. Also compatible with variable products."
          />
        </div>
      </div>
    </div>
  </Containor>
)
