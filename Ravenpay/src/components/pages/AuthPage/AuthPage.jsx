import { useState, useEffect } from 'react';
import Auth from '../../organisms/Auth/Auth';
import Profile from '../Profile/Profile';
import { getGravatarUrl } from '../../../utils/gravatar';
import { fetchGitHubRepositories } from '../../../utils/github';
import './AuthPage.css';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [gravatarUrl, setGravatarUrl] = useState('');
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (email) {
        setGravatarUrl(getGravatarUrl(email));
        const fetchedRepositories = await fetchGitHubRepositories(email);
        setRepositories(fetchedRepositories);
      }
    };

    fetchUserData();
  }, [email]);

  const handleAuth = (email) => {
    setEmail(email);
  };

  return (
    <div className="auth-page">
      {!email ? (
        <Auth onAuth={handleAuth} />
      ) : (
        <Profile email={email} gravatarUrl={gravatarUrl} repositories={repositories} />
      )}
    </div>
  );
};

export default AuthPage;
