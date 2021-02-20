// data
import React from "react";

// style

// components

export default function Services(props) {
  return (
    <React.Fragment>
      {
        Object.keys(props.content).length > 0 ? < section className={props.createClass(props.content)} id="services">
          {
            props.content.parts.map((item, i) => {
              return props.createElement(item, i);
            })}
        </section>
          : null
      }
    </React.Fragment >
  );
}