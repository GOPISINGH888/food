import React from "react"
import Props from "../components/Props"
import styled from "styled-components"
const Maargin = styled.div``
const Containor = styled.div`
  background: #f8f8f7
    url(https://lafka.althemist.com/wp-content/uploads/2019/06/concrete-wall.png?id=99);
  .clr {
    margin-top: 5rem;
    color: #e1970d;
  }
  .gclr {
    color: #999999;
    margin-top: 20px;
  }
  .top {
    margin-top: 6rem;
  }
`
export default () => (
  <Containor>
    <div className="columns is-mobile is-centered">
      <div className="column is-half  has-text-centered">
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
    </div>
  </Containor>
)
