import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { SignIn, SignUp, Contacts } from '../pages';
import { RestrictedRoute, PrivateRoute } from 'components';

export const App = () => {
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
          <Route path="*" element={<h1>Errror 44</h1>} />
        </Route>
      </Routes>
    </div>
  );
};
