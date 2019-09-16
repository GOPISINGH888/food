import React from "react"
import styled from "styled-components"
const Maargin = styled.div``
const Clr = styled.div`
  color: red;
  background-color: red;
`
const props = props => (
  <div className="container">
    <div class="columns is-multiline ">
      <div className="column is-4">
        <div className="card">
          <div className="columns">
            <Clr>
              <div className="column spaced"></div>
            </Clr>
            <div className="column has-text-white-bis has-background-black-bis">
              <p className="is-size-4 headtext">Lead generation</p>
              <p className="is-size-6 smalltext">
                Justo tempor, rutrum erat id, molestieJusto tempor, rutrum erat
                id, molestieJusto tempor
              </p>
              <button className="button is-danger is-rounded">Danger</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default props
