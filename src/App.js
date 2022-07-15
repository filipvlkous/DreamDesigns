import React, { useEffect, useState, lazy, Suspense } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Switch, Route, useLocation } from "react-router-dom";
import Loading from "./components/loading.js";
const Home = lazy(() => import("./components/Home/index"));
const AboutUs = lazy(() => import("./components/AboutUs/index"));
const Error = lazy(() => import("./components/Error/index"));
export const AppContainer = {
  width: "100%",
  height: "100%",
  color: "#fff",
  backgroundColor: "#56a3f6",
};

export default function App() {
  const location = useLocation();
  const [offsetY, setOffsetY] = useState(true);

  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? setOffsetY(true) : setOffsetY(false);

    return () => (window.onscroll = null);
  }, []);

  return (
    <ParallaxProvider>
      <Suspense fallback={<Loading />}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/sluzby">
            <AboutUs offsetY={offsetY} setOffsetY={setOffsetY} />
          </Route>
          <Route exact path="/">
            <div style={AppContainer}>
              <Home offsetY={offsetY} setOffsetY={setOffsetY} />
            </div>
          </Route>
          <Route path={"/*"}>
            <Error />
          </Route>
        </Switch>
      </Suspense>
    </ParallaxProvider>
  );
}
