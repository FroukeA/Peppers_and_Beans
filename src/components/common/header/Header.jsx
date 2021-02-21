// data
import React from "react";

// functions

// style

// components

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={props.createClass(props.content)}>
        <div className="container">
          {props.content.parts.map((item, i) => {
            return props.createElement(item, i);
          })}
        </div >
      </header>
    </React.Fragment>
  );
}