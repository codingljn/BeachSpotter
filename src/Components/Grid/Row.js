import React from "react";

export const Row = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);

// https://jsxmachina.github.io/react-grid-system/
// https://github.com/richardzcode/fluid-react