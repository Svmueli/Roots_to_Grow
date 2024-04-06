import React from "react";
import { useRoutes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import PlayGame from "./pages/Play";
import RootsToGrowPage from "./pages/test";

const Routes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Welcome/>
        },
        {
            path: "/play",
            element: <PlayGame/>
        },
        {
            path: "/test",
            element: <RootsToGrowPage/>
        }
    ]);

    return routes;
}

export default Routes;