import Link from 'next/link';

const FormFooter = () => {
  return (
    <>
      <hr className='border-blue-200 mt-8 mb-5' />
      <div className='flex justify-between'>
        <p className='uppercase text-xs text-gray-600 mb-6 text-center self-center mt-3'>
          step 1 of 3
        </p>{' '}
        <div>
          <Link href='/register/newproject'>
            <button
              type='button'
              className='button bg-blue-500 text-white hover:bg-blue-400 font-bold'
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormFooter;
