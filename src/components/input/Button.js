import MuiButton from '@mui/material/Button';
import PropTypes from 'prop-types';

function Button({ children, ...rest }) {
  return <MuiButton {...rest}>{children}</MuiButton>;
}
export default Button; //TODO : observer없을떄 어떤지 확인해보자

export function SearchButton({ label, type, onClick, children, ...rest }) {
  return (
    <Button type={type} size="xl" sx={{ position: 'absolute', right: '30px', bottom: '18px' }} onClick={onClick} {...rest}>
      {children || label}
    </Button>
  );
}

SearchButton.defaultProps = {
  type: 'submit',
};

SearchButton.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  label: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
