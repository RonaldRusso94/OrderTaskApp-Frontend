import propTypes from 'prop-types';

const Card = ({ className, styles, children }) => <div className={`bg-white px-4 shadow-lg ${className}`} style={styles}>{children}</div>;
Card.propTypes = {
  className: propTypes.string,
  children: propTypes.node.isRequired,
  styles: propTypes.oneOfType([propTypes.object, propTypes.array]),
};

Card.defaultProps = {
  className: '',
  styles: {},
};

export default Card;
