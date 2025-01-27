import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useIsInViewport } from "./useIsInViewport";
export const AnimatedSection = ({ getStyles, children }) => {
  const elementRef = React.useRef();
  const isInViewport = useIsInViewport(elementRef);

  return (
    // <section style={getStyles(isInViewport)}> //TODO: uncomment this line to use the animation
    <section>
      <div className="rectangle" ref={elementRef}>
        {children}
      </div>
    </section>
  );
};
