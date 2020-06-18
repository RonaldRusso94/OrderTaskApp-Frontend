import propTypes from 'prop-types';

const Container = ({ children, defaultMargins, className }) => (
  <div className={`container px-4 sm:px-8 lg:px-12 xl:px-20 mx-auto ${defaultMargins ? 'py-4' : ''} ${className || ''}`}>
    {children}
  </div>
);

Container.propTypes = {
  children: propTypes.element.isRequired,
  defaultMargins: propTypes.bool,
  className: propTypes.string,
};

Container.defaultProps = {
  defaultMargins: true,
  className: '',
};

export default Container;
