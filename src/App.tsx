import type { Component } from "solid-js";
import { Routes, Route, Router, A } from "@solidjs/router";
import { MaingPage } from "./pages/MainPage";
import { FormPage } from "./pages/FormPokemonPage";
import { APP_ROUTE } from "./shared/constants/app_routes";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path={APP_ROUTE.index} component={MaingPage} />
        <Route path={APP_ROUTE.createPokemon} component={FormPage} />
        <Route path={APP_ROUTE.updatePokemon} component={FormPage} />
      </Routes>
    </Router>
  );
};

export default App;
