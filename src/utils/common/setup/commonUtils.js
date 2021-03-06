// data
import React from "react";

// functions
// import {
//   mergeDataElement,
//   mergeDataElementItems
// } from "../../data/dataProcessing";
import {
  renderComponent,
  renderElementItems,
  renderElement
}
  from "../../data/dataRendering";
import { createClass } from "../../data/dataStyling";

// components

// variables
let load = true;

function handleRenderElements(item, key) {
  if (item.parts.length > 0) {
    // Nested DOM
    if (item.type === "card") {
      renderComponent(item, "", null, null, load);
    } else {
      console.log('commonUtils', item)
      return (
        <item.element key={key} className={createClass(item)}>
          {renderElementItems(item.parts)}
        </item.element>
      );
    }
  } else {
    // Single DOM
    if (
      item.type === "description" ||
      item.type === "term" ||
      item.type === "textItem" ||
      item.type === "button" ||
      item.type === "customBoxInput"
    ) {
      renderComponent(item, key, null);
    } else {
      return (
        renderElement(item, key)
      )
    }
  }
}

export function createElement(item, key) {
  return handleRenderElements(item, key);
}

// function handleMergeDataElements(item, key, handleData) {
//   if (item.parts.length > 0) {
//     // Nested DOM
//     mergeDataElementItems(item, key, handleData)
//   } else {
//     // Single DOM
//     mergeDataElement(item, key, handleData);
//   }
// }

// export function createDataElement(item, handleData) {
//   return handleMergeDataElements(item, handleData);
// }