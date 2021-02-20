import React from "react";

export default function Img(props) {
  return <img className={props.class} src={props.item.icon} alt={props.item.label} />;
}