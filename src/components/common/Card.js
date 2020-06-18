import propTypes from 'prop-types';

const Card = ({ className, style, children }) => <div className={`bg-white px-4 shadow-lg inline-block ${className}`} style={{ ...style }}>{children}</div>;
Card.propTypes = {
  className: propTypes.string,
  children: propTypes.element.isRequired,
  style: propTypes.string,
};

Card.defaultProps = {
  className: '',
  style: '',
};

export default Card;
