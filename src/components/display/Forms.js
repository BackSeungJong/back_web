import { FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';

const Forms = ({ methods, id, name, autoComplete, onSubmit, onError, children, ...props }) => {
  return (
    <FormProvider {...methods}>
      <form id={id} name={name} onSubmit={methods.handleSubmit(onSubmit, onError)} autoComplete={autoComplete} {...props}>
        {children}
      </form>
    </FormProvider>
  );
};

Forms.defaultProps = {
  autoComplete: 'off',
};

Forms.propTypes = {
  methods: PropTypes.object.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  getMethods: PropTypes.func,
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
};

export default Forms;
