import React from "react"
import styled from "styled-components"
const Prps = styled.div`
  .zoom {
    transition: transform 0.2s;
    margin: 0 auto;
  }
  .zoom:hover {
    transform: scale(1.1);
  }
  .headtext {
    margin-top: 1rem;
  }
  .smalltext {
    margin-top: 1rem;
  }
`
const props = props => (
  <div className="container">
    <Prps>
      <div>
        <img className="zoom" src={props.img} />
      </div>
      <p className="is-size-4 headtext has-text-black-bis has-text-weight-bold is-size-4">
        {props.headtext}
      </p>
      <p className="is-size-6 smalltext has-text-light-grey has-text-weight-semibold is-size-6">
        {props.smalltext}
      </p>
    </Prps>
  </div>
)
export default props
