import React, {
  Suspense,
  Fragment,
  lazy
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen';
import AuthGuard from 'src/components/AuthGuard';
import GuestGuard from 'src/components/GuestGuard';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes: Routes = [
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/errors/NotFoundView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('src/views/auth/LoginView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/register',
    component: lazy(() => import('src/views/auth/RegisterView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/anonymous-login',
    component: lazy(() => import('src/views/main/mainView'))
  },
  {
    path: '/app',
    guard: AuthGuard,
    routes: [
      {
        exact: true,
        path: '/app',
        component: lazy(() => import('src/views/main/mainView'))
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },
  {
    path: '*',
    routes: [
      {
        exact: true,
        path: '/',
        component: () => <Redirect to="/app" />
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  }
];

export default routes;
