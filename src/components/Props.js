import React from "react"
import styled from "styled-components"
const Maargin = styled.div``
const Clr = styled.div`
  color: red;
  background-color: red;
`
const props = props => (
  <div className="container">
    <img src={props.img} />
    <p className="is-size-4 headtext">{props.headtext}</p>
    <p className="is-size-6 smalltext">{props.smalltext}</p>
  </div>
)
export default props
