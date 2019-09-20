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
  .heading {
    padding-bottom: 1rem;
    padding-top: 4rem;
  }
`
const props = props => (
  <div className="container">
    <Prps>
      <h1 className="heading is-size-1 has-text-black-bis has-text-weight-bold">
        {props.heading}
      </h1>
      <img className="zoom" src={props.img} />
      <p className="is-size-4 headtext has-text-black-bis has-text-weight-bold">
        {props.headtext}
      </p>
      <p className="is-size-6 smalltext has-text-light-grey has-text-weight-semibold ">
        {props.smalltext}
      </p>
    </Prps>
  </div>
)
export default props
