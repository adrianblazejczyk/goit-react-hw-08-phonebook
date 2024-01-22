import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { SignIn, SignUp, Contacts } from '../pages';
import { RestrictedRoute, PrivateRoute } from 'components';

import { checkLoginStatus } from '../redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Navigate to="/login" />}
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignIn />} />
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<h1>Errror 404</h1>} />
        </Route>
      </Routes>
    </div>
  );
};
