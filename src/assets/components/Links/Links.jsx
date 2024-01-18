import React from "react";

const Links = ({ route }) => {
  return (
    <li className="mb-5 md:mb-0">
      <a href={route.path} className="font-bold p-3">
        {route.name}
      </a>
    </li>
  );
};

export default Links;
