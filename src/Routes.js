import React from "react";
import { useRoutes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import PlayGame from "./pages/Play";

const Routes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Welcome/>
        },
        {
            path: "/play",
            element: <PlayGame/>
        }
    ]);

    return routes;
}

export default Routes;