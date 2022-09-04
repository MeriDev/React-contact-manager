import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormInput = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  errors,
}) => {
  return (
    <div className="form-group mb-2">
      <label htmlFor={name}>{label}</label>
      <input
        className={classNames('form-control form-control-lg', {
          'is-invalid': errors,
        })}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e)}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
