import React, { useState } from 'react';
import Input from '../common/Input';
import DropDownMenu from '../common/DropDownMenu';
import TextArea from '../common/TextArea';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';

const OnBoard = () => {
  const [teamName, setTeamName] = useState('');

  const [selection, setSelection] = useState('');
  const [teamDescription, setTeamDescription] = useState('');
  return (
    <FormHeader>
      <form>
        <Input
          name='name'
          id='name'
          label='Team Name'
          labelClasses='text-md'
          onChange={(e) => setTeamName(e.target.value)}
        />
        <DropDownMenu
          label={'Request / Need'}
          value={['test', 'test2', 'test3']}
          onChange={(e) => setSelection(e.target.value)}
        />
        <TextArea
          id='team-description'
          label='Team Description'
          labelClasses='text-md'
          onChange={(e) => setTeamDescription(e.target.value)}
        />

        <FormFooter />
      </form>
    </FormHeader>
  );
};

export default OnBoard;
