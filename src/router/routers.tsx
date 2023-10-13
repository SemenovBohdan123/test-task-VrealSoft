import { ListOfPath } from "../pages/ListOfPath";
import { IRouter } from "../typings/router";

export const ROUTERS: Array<IRouter> = [
  {
    path: "/",
    element: <ListOfPath />,
  },
];
