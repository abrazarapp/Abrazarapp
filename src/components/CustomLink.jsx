import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} {...props} className={`${match && "route-active"}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
