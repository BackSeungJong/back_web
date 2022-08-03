import { AppBar, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function Header({ position }) {
  return (
    <AppBar position={position}>
      <Typography>사이트</Typography>
    </AppBar>
  );
}

Header.defaultProps = {
  position: 'fixed',
};

Header.propTypes = {
  position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
};

export default Header;
