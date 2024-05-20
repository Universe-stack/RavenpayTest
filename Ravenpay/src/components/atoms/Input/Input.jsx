import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ type, placeholder, value, onChange }) => (
  <input
    className="input"
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
export default Input;
