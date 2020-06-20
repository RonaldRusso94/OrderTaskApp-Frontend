import React, { useState } from 'react';

const DropDownMenu = ({ label, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='mt-4'>
        <label>
          {label}
          <select
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
            onChange={onChange}
          >
            <option value='' selected>
              Please Select One
            </option>
            {value.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
};

export default DropDownMenu;
