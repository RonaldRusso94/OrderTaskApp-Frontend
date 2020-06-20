const Upload = ({
  label,
  description,
  type,
  id,
  placeholder,
  value,
  onChange,
  name,
  labelClasses,
}) => {
  return (
    <>
      <div className='mt-4'>
        <label htmlFor={name}>{label}</label>
        {description && <p className='text-gray-500'>{description}</p>}

        <div class='border border-dashed border-gray-500 relative bg-white text-gray-500 hover:text-gray-800'>
          <input
            type='file'
            multiple
            class='cursor-pointer relative block opacity-0 w-full h-full p-20 z-50'
          />
          <div class='text-center p-10 absolute top-0 right-0 left-0 m-auto'>
            <h4>
              Drop files anywhere to upload
              <br />
              or
            </h4>
            <p class=''>Select Files</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
