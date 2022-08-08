import React from 'react';

import { Paper, Stack, Typography } from '@mui/material';
import _ from 'lodash';
import PropTypes from 'prop-types';

function FormLabel({ label, labelStyle, required }) {
  return (
    <Paper sx={{ bgcolor: 'background.default', minWidth: 120, pr: '12px', ...labelStyle }}>
      <Typography color="common.black" align="right">
        {label}
      </Typography>
    </Paper>
  );
}

const FormItem = ({ label, labelStyle, sx, children, required, ...rest }) => {
  return (
    <Stack display="inline-flex" direction="row" alignItems="center" sx={{ width: 'auto', p: '5px', minHeight: 48, ...sx }} {...rest}>
      {React.Children.map(children, (child, index) => {
        if (!child) return null;

        const isRequired = _.isArray(child.props?.required)
          ? _.reduce(
              child.props.required,
              (result, r) => {
                result = result || r;
                return result;
              },
              false,
            )
          : !!child.props?.required;

        return (
          <>
            <FormLabel label={label} required={isRequired || required} labelStyle={labelStyle} />
            {React.cloneElement(child, { key: `${index}`, ...child.props })}
          </>
        );
      })}
    </Stack>
  );
};

FormItem.defaultProps = {
  required: false,
};

FormItem.propTypes = {
  label: PropTypes.string,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default FormItem;
