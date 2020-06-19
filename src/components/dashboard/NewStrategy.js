import Modal from '../common/Modal';
import Card from '../common/Card';
import Input from '../common/Input';

const NewStrategy = ({ open, setOpen }) => (
  <>
    <Modal open={open} className="w-3/4 lg:w-1/3">
      <div className="bg-white px-4 py-2 border-b border-gray-500">
        <div className="flex justify-between items-center">
          <span>New Strategy</span>
          <span onClick={() => setOpen(!open)} className="text-xl cursor-pointer hover:text-red-500">&times;</span>
        </div>
      </div>
      <Card className="py-2">
        <Input label="Title" labelClasses="text-md" placeholder="Order Name" />
      </Card>
    </Modal>
  </>
);

export default NewStrategy;
