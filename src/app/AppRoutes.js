import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const Home = lazy(() => import("./dashboard/Dashboard"));

const RomCham = lazy(() => import("./user-pages/RomChamFullUi"));
const Feeds = lazy(() => import("./pages/Feeds/Feeds"));
const Events = lazy(() => import("./pages/Event-List/EventList"));
const Polls = lazy(() => import("./pages/PollList/PollList"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));
const Lockscreen = lazy(() => import("./user-pages/Lockscreen"));

const BlankPage = lazy(() => import("./general-pages/BlankPage"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/page/home" component={Home} />

          {/* <Route path="/" component={RomCham} /> */}
          <Route path="/page/feeds" component={Feeds} />
          <Route path="/page/events" component={Events} />
          <Route path="/page/polls" component={Polls} />

          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />

          <Route path="/tables/basic-table" component={BasicTable} />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/homepage" component={RomCham} />
          <Route path="/user-pages/register-1" component={Register1} />
          <Route path="/user-pages/lockscreen" component={Lockscreen} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />

          <Route path="/general-pages/blank-page" component={BlankPage} />

          <Redirect to="/homepage" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
