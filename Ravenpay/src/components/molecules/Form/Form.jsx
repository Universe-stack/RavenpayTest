import Input from '../../atoms/Input/Input';
import PropTypes from 'prop-types'
import './Form.css';

const Form = ({ email, setEmail, onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    <Input 
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <button className="form__button" type="submit">Submit</button>
  </form>
);

Form.propTypes = {
    email: PropTypes.string,
    setEmail: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }


export default Form;
