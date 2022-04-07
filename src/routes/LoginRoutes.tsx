// THIRD-PARTY
import { lazy } from 'react';

// PROJECT IMPORTS
import GuestGuard from 'utils/route-guard/GuestGuard';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';

const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/auth/Login')));
// const AuthLogin = Loadable(lazy(() => import('views/pages/qlrank/index')));

const LoginRoutes = {
  path: '/',
  element: (
    <NavMotion>
      <GuestGuard>
        <MinimalLayout />
      </GuestGuard>
    </NavMotion>
  ),
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    }
  ]
};

export default LoginRoutes;
