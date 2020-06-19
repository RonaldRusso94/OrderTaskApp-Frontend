import propTypes from 'prop-types';
import Card from './Card';

const Modal = ({
  open, children, className,
}) => {
  return (
    <div>
      { open ? (
        <div
          style={{ zIndex: '99', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          className="h-screen w-screen fixed flex items-center justify-center"
        >
          <div className={className}>
            {children}
          </div>
        </div>
      ) : '' }
    </div>
  );
};

Modal.propTypes = {
  children: propTypes.node.isRequired,
  open: propTypes.bool.isRequired,
  className: propTypes.string,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;
