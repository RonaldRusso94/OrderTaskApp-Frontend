import propTypes from 'prop-types';

const Input = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  name,
  labelClasses,
}) => (
  <div className='flex flex-col pt-4'>
    <label htmlFor={name || id} className={`${labelClasses || 'text-lg'}`}>
      {label || id.charAt(0).toUpperCase() + id.slice(1)}
      {/*  */}
    </label>
    <input
      name={name || id}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
    />
  </div>
);

Input.propTypes = {
  label: propTypes.string,
  type: propTypes.string,
  id: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  onChange: propTypes.func,
  name: propTypes.string,
  labelClasses: propTypes.string,
};

Input.defaultProps = {
  label: '',
  type: 'text',
  id: '',
  placeholder: '',
  onChange: () => {},
  name: '',
  labelClasses: '',
};

export default Input;
