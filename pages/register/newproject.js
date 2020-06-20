import React, { useState } from 'react';
import Input from '../../src/components/common/Input';
import TextArea from '../../src/components/common/TextArea';
import DropDownMenu from '../../src/components/common/DropDownMenu';
import Upload from '../../src/components/common/Upload';
import Link from 'next/link';

const newProject = () => {
  const [projectName, setProjectName] = useState('');

  const [projectDescription, setProjectDescription] = useState('');
  const [projectTags, setProjectTags] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  //   v ???
  const [projectCover, setProjectCover] = useState('');

  return (
    //  <div className=''>
    <div className='flex justify-center h-screen items-center'>
      <div>
        <h1 className='bold text-2xl text-center mb-3 weight font-semibold'>
          Create a new project
        </h1>
        <hr />
        <p className='text-center text-gray-500'>
          Understanding the type of team you're creating help us to ask all the
          right questions.
        </p>
        <Input
          name='Project name'
          label='Project Name'
          labelClasses='text-md'
          onChange={(e) => setTeamName(e.target.value)}
        />

        <TextArea
          id='project-description'
          label='Project Description'
          labelClasses='text-md'
          onChange={(e) => setProjectDescription(e.target.value)}
        />

        <DropDownMenu
          label={'Project tags'}
          value={['test', 'test2', 'test3']}
          onChange={(e) => setSelection(e.target.value)}
        />

        <Upload
          label={'Project Cover'}
          description={'Please use an image no larger than 1200px * 600px'}
          onChange={(e) => setProjectCover(e.target.value)}
        />

        <div className='pt-4 flex justify-end'>
          <Link href='/dashboard'>
            <button
              type='button'
              className='button bg-blue-500 text-white hover:bg-blue-400 font-bold'
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
    //  </div>
  );
};

export default newProject;
