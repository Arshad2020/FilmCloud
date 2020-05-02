import React from "react";
import { Route, Redirect } from "react-router-dom";
function PrivateRoute({ component: Component, isLogedIn, ...rest }) {
  console.log(isLogedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
