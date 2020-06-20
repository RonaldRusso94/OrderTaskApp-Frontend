const FormHeader = ({ children }) => {
  return (
    <div className='flex justify-center h-screen items-center'>
      <div>
        <p className='uppercase text-xs text-gray-600 mb-6 text-center'>
          step 1 of 3
        </p>
        <h1 className='bold text-2xl text-center mb-3 weight font-semibold'>
          Let's start with the basics.
        </h1>
        <p className='text-center text-gray-500'>
          Understanding the type of team you're creating help us to ask all the
          right questions.
        </p>
        {children}
      </div>
    </div>
  );
};

export default FormHeader;
