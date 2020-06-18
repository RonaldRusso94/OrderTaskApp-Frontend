import Input from '../../src/components/common/Input';
import TextArea from '../../src/components/common/TextArea';

const onboard = () => (
  <div className="flex justify-center h-screen items-center">
    <div>
      <p className="uppercase text-xs text-gray-600 mb-6 text-center">
        step 1 of 3
      </p>
      <h1 className="bold text-2xl text-center mb-3 weight font-semibold">
        Let's start with the basics.
      </h1>
      <p className="text-center text-gray-500">
        Understanding the type of team you're creating help us to ask all the
        right questions.
      </p>
      <form>
        <Input name="name" id="name" label="Team Name" labelClasses="text-md" />
        <TextArea
          id="team-description"
          label="Team Description"
          labelClasses="text-md"
        />
        <hr className="border-blue-200 mt-8 mb-5" />
        <div className="flex justify-between">
          <p className="uppercase text-xs text-gray-600 mb-6 text-center self-center mt-3">
            step 1 of 3
          </p>
          {' '}
          <div>
            <button type="button" className="button bg-blue-500 text-white hover:bg-blue-400 font-bold">Continue</button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default onboard;
