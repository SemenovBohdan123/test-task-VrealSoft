import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { IRouter } from "../typings/router";

import { ROUTERS } from "./routers";

const Router: FC = () => {
  return (
    <Routes>
      {ROUTERS.map(({ element, path }, index: number) => (
        <Route path={path} element={element} key={index} />
      ))}
    </Routes>
  );
};

export default Router;
