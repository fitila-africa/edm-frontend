import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import {
  Dashboard,
  Organizations,
  States,
  Help,
  About,
  Account,
  Contact,
  Administrators,
} from "../containers/Admin";
// import Businesses from "../containers/Admin/containers/Dashboard/_partials/Businesses";
// import BusinessSupport from "../containers/Admin/containers/Dashboard/_partials/BusinessSupport";
// import Funding from "../containers/Admin/containers/Dashboard/_partials/Funding";
import Segment from "../containers/Admin/containers/Dashboard/_partials/Segments";
import PrivacyPolicy from "../containers/Admin/containers/PrivacyPolicy";
// import Training from "../containers/Admin/containers/Dashboard/_partials/Training";
import Profile from "../containers/Admin/containers/Profile";
// import {Business} from "../containers/Business";
import AddCompany from "../containers/Business/_partials/AddCompany";
import ListOrganization from "../containers/Business/_partials/ListOrganization";
import Preview from "../containers/Business/_partials/Preview";
import Success from "../containers/Business/_partials/Success";
import Uploads from "../containers/Business/_partials/Uploads";
import Landing from "../containers/Landing";
import Login from "../containers/Login";
import NonAuthLayout from "../containers/NonAuthLayout";
import Signup from "../containers/Signup";
import AuthRoute from "../utils";

const NotFound = () => {
  return <Redirect to="/" />;
};

const Routes = () => {
  return (
    <Switch>
      <AuthRoute exact path="/d" component={Dashboard} />
      <AuthRoute exact path="/d/organizations" component={Organizations} />
      <AuthRoute
        exact
        path="/d/organizations/:state"
        component={Organizations}
      />

      <AuthRoute path="/d/states" component={States} />
      <AuthRoute path="/d/account" component={Account} />
      <AuthRoute path="/d/administrators" component={Administrators} />
      <AuthRoute path="/d/contact" component={Contact} />
      <AuthRoute path="/d/project_brief" component={About} />
      <AuthRoute path="/d/help" component={Help} />
      <AuthRoute path="/d/privacy" component={PrivacyPolicy} />
      <AuthRoute exact path="/d/profile/:id" component={Profile} />
      {/* <AuthRoute path="/d/segments/training" component={Training} />
      <AuthRoute
        path="/d/segments/business_support"
        component={BusinessSupport}
      />
      <AuthRoute path="/d/segments/funding" component={Funding} />
      <AuthRoute path="/d/segments/businesses" component={Businesses} /> */}
      <AuthRoute path="/d/segments/:name" component={Segment} />

      <AuthRoute exact path="/business" component={AddCompany} />
      <AuthRoute path={`/business/listorg`} component={ListOrganization} />
      <AuthRoute path={`/business/uploads`} component={Uploads} />
      <AuthRoute path={`/business/preview`} component={Preview} />
      <AuthRoute path={`/business/success`} component={Success} />

      <NonAuthLayout>
        <Switch>
          <Route exact path="/" component={Landing} />

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="*" component={NotFound} />
        </Switch>
      </NonAuthLayout>
    </Switch>
  );
};

export default Routes;
