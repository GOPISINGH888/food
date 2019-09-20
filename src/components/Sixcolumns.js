import React from "react"
import styled from "styled-components"
import Props from "./Props"
const Wrap = styled.div`
  background: #f8f8f7
    url(https://lafka.althemist.com/wp-content/uploads/2019/06/concrete-wall.png?id=99);
`
export default () => (
  <Wrap>
    <div className="container">
      <div className="columns">
        <div className="column is-multiline is-7 is-offset-one-quarter has-text-cemtered">
          <Props
            heading="FLEXIBLE FOOD MENU"
            smalltext="Custom Menu Entry post type and menu shortcode with product options, allergens list,
            nutrition info and option to link entries to woocommerce products."
          />
        </div>
      </div>
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/menu-landing1.jpg"
            headtext="MAIN DEMO"
            smalltext="Suitable for display and light backgrounds."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/menu-landing2.jpg"
            headtext="LIGHT COLORS"
            smalltext="Suitable for display and dark backgrounds."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/menu-landing3.jpg"
            headtext="NO IMAGE"
            smalltext="Clean look with no image, but still clickable."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/menu-landing4.jpg"
            headtext="STATIC"
            smalltext="Entries are static, no link to single entry page."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/menu-landing5.jpg"
            headtext="SORTABLE"
            smalltext="Entries can be filtered by category."
          />
        </div>
        <div className="column is-one-third">
          <Props
            img="https://lafka.althemist.com/wp-content/uploads/2019/06/menu-landing6.jpg"
            headtext="SINGLE"
            smalltext="Single menu entry page with details. Can be linked to product."
          />
        </div>
      </div>
    </div>
  </Wrap>
)
