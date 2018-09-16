import React from "react";

export const Col = ({ size, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>
);

// https://jsxmachina.github.io/react-grid-system/
// https://github.com/richardzcode/fluid-react