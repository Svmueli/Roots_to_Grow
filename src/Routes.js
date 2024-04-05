import React from "react";
import { useRoutes } from "react-router-dom";

import Welcome from "./pages/Welcome";

const Routes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Welcome/>
        }
    ]);

    return routes;
}

export default Routes;