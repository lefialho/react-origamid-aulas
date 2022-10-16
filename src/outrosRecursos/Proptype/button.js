import PropTypes from 'prop-types';

export function Button({ width, margin, children }) {
  return (
    <button style={{ margin, width: `${width}px`, height: `${width / 3}px` }}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  margin: '20px',
};

Button.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string,
};
