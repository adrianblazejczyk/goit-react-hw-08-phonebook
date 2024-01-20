import { Helmet } from 'react-helmet';
import { SignUpForm } from '../../components/SignUpForm';

export function SignUp() {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <SignUpForm />
    </div>
  );
}
