import React from "react"
import styled from "styled-components"
import Props from "./Props"
const Bgimg = styled.div`
  background: url(https://lafka.althemist.com/wp-content/uploads/2019/06/back-landing1.png?id=145);
  background-size: cover;
`
const Bgimag = styled.div`
  background: #f8f8f7
    url(https://lafka.althemist.com/wp-content/uploads/2019/06/concrete-wall.png?id=99);
  padding-left: 2rem;
  padding-right: 2rem;
`
export default () => (
  <Bgimag>
    <div className="container has-text-centered">
      <Bgimg>
        <Props
          heading="NUTRITION & ALLERGENS"
          img="https://lafka.althemist.com/wp-content/uploads/2019/06/prod-landing666-300x210.jpg"
          headtext="RDI CALCULATION"
          smalltext="With this extremely helpful (in some countries required) feature you
             can easily add nutrition details and the system would automatically calculate D
             I percentage,
            based on WHO (World Health Organization) reccomendations."
        />
      </Bgimg>
    </div>
  </Bgimag>
)
