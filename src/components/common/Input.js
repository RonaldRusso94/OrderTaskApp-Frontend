const Input = ({ label, type, id, placeholder, htmlFor }) => {
  return (
    <div className='flex flex-col pt-4'>
      <label htmlFor={htmlFor} className='text-lg'>
        {label ? label : id.charAt(0).toUpperCase() + id.slice(1)}
        {/*  */}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
      />
    </div>
  );
};

export default Input;
