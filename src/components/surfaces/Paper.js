import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';

const StyledPaper = styled(forwardRef(({ type, hasBorder, ...props }, ref) => <MuiPaper {...props} ref={ref} />))(({ theme, type, hasBorder }) => {
  const typeStyle = {};
  switch (type) {
    case 'search':
      typeStyle.position = 'relative';
      typeStyle.padding = '14px 200px 14px 0';
      typeStyle.minHeight = 76;
      typeStyle.backgroundColor = theme.palette.background.search;
      break;
    case 'table':
      typeStyle.marginTop = '60px';
      typeStyle.backgroundColor = theme.palette.background.paper;
      typeStyle.overflow = 'hidden';
      break;
    case 'desc':
      typeStyle.padding = '14px 30px';
      typeStyle.minHeight = 76;
      typeStyle.backgroundColor = theme.palette.background.search;
      typeStyle.display = 'flex';
      typeStyle.justifyContent = 'center';
      typeStyle.alignItems = 'center';
      if (hasBorder) {
        typeStyle.borderTop = `2px solid ${theme.palette.primary.main}`;
      }
      break;
    default:
  }

  return {
    backgroundColor: theme.palette.background.default,
    ...typeStyle,
  };
});

const Paper = forwardRef((props, ref) => {
  return <StyledPaper {...props} ref={ref} />;
});

Paper.defaultProps = {
  hasBorder: false,
};

Paper.propTypes = {
  type: PropTypes.oneOf(['', 'search', 'table', 'desc']),
  hasBorder: PropTypes.bool,
  children: PropTypes.node,
};

export default Paper;
