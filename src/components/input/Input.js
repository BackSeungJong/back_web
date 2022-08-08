import { forwardRef, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { TextField } from '@mui/material';

const BaseInput = forwardRef(({ readOnly, inputProps, onChange, onChangeValue, disableError, ...rest }, ref) => {
  const handleChange = (e) => {
    if (_.isFunction(onChange)) onChange(e);
    if (_.isFunction(onChangeValue)) onChangeValue(e.target.value);
  };

  return <TextField {...rest} readOnly={readOnly} inputProps={{ ...inputProps, readOnly }} onChange={handleChange} ref={ref} />;
});

const FormInput = forwardRef(({ name, required, onChange, pattern, validate, disabled, disableError, ...rest }, ref) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { ref: fieldRef, onChange: fieldOnChange, ...restField } = register(name, { required, pattern, validate, disabled });

  const handleChange = useCallback(
    (e) => {
      fieldOnChange(e).then(() => {});
      if (_.isFunction(onChange)) {
        onChange(e);
      }
    },
    [fieldOnChange, onChange],
  );

  const handleRef = useCallback(
    (e) => {
      fieldRef(e);
      if (ref) ref.current = e;
    },
    [fieldRef, ref],
  );

  const errorProps = !disableError ? { error: errors && !!errors[name], helperText: errors && errors[name]?.message } : {};

  return <BaseInput {...restField} {...rest} {...errorProps} onChange={handleChange} ref={handleRef} />;
});

export const Input = forwardRef((props, ref) => {
  const { name } = props;
  const methods = useFormContext();

  return methods && !!name ? <FormInput {...props} ref={ref} /> : <BaseInput {...props} ref={ref} />;
});

Input.defaultProps = {
  required: false,
  readOnly: false,
  size: 'medium',
  disableError: false,
};

Input.propTypes = {
  name: PropTypes.string,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  // https://react-hook-form.com/api/useform/register Options > pattern
  pattern: PropTypes.shape({
    value: PropTypes.instanceOf(RegExp),
    message: PropTypes.string,
  }),
  // https://react-hook-form.com/api/useform/register Options > validate
  validate: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  width: PropTypes.oneOf(['w1', 'w2', 'w3']),
  onChange: PropTypes.func,
  onChangeValue: PropTypes.func,
};
