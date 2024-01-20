import { Helmet } from 'react-helmet';
import { SignInForm } from '../../components/SignInForm';

export function SignIn() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <SignInForm />
    </div>
  );
}
