import { useCallback } from "react";

const UseYupValidationResolver = validationSchema => useCallback(
  async data => {
    try {
      const values = await validationSchema.validate(data, {
        abortEarly: false
      });

      return {
        values,
        errors: {},
      };
    } catch (errors) {
      const err = {
        values: {},
        errors: {}
      };

      err.errors = errors.inner.reduce(
        (allErrors, currentError) => ({
          ...allErrors,
          [currentError.path]: {
            type: currentError.type ?? "validation",
            message: currentError.message
          }
        }),
        {}
      )
      return err
    }
  },
  [validationSchema]
);

export default UseYupValidationResolver;