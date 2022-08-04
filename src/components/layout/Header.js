import { AppBar, Icon, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Blind } from '../display';

function Header({ position }) {
  return (
    <AppBar
      component="nav"
      position={position}
      sx={{ height: '64px', backgroundColor: '#0000', color: '#ACF', flexDirection: 'row', display: 'flex', alignContent: 'center' }}
    >
      <Toolbar>
        <Blind>헤더영역</Blind>
        <img src={'/images/common/logo.svg'} height="50" width="50" />
        <Typography>나의 리액트 페이지</Typography>
      </Toolbar>
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
