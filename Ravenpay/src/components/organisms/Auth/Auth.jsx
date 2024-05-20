import { useState } from 'react';
import Form from '../../molecules/Form/Form';
import PropTypes from 'prop-types'
import './Auth.css';

const Auth = ({ onAuth }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuth(email);
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Authentication</h2>
      <Form email={email} setEmail={setEmail} onSubmit={handleSubmit} />
    </div>
  );
};

Auth.propTypes = {
    onAuth: PropTypes.func.isRequired,
  }


export default Auth;
