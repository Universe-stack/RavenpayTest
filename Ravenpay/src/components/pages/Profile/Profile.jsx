import PropTypes from 'prop-types'
import './Profile.css';

const Profile = ({ email, gravatarUrl, repositories }) => (
  <div className="profile">
    <h2 className="profile__title">Profile</h2>
    <img className="profile__avatar" src={gravatarUrl} alt={`${email}'s avatar`} />
    <p className="profile__email">{email}</p>
    <div className="profile__repositories">
      <h3>GitHub Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.full_name}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Profile.propTypes = {
    email: PropTypes.string.isRequired,
    gravatarUrl: PropTypes.string.isRequired,
    repositories: PropTypes.any.isRequired,
}


export default Profile;
