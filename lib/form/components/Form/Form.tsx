import { useDebounceCallback } from '@react-hook/debounce';
import React, { useEffect } from 'react';
import {
  DeepPartialSkipArrayKey,
  DefaultValues,
  FieldValues,
  FormProvider,
  useForm,
  useWatch,
} from 'react-hook-form';
import useDeepCompareEffect from 'use-deep-compare-effect';

export interface FormProps<Values extends FieldValues> {
  autoSave?: boolean;
  autoSaveTimeout?: number;
  className?: string;
  defaultValues: DefaultValues<Values>;
  onSubmit: (values: Values) => void;
  children?: React.ReactNode;
}

const Form = <Values extends FieldValues>({
  autoSave,
  autoSaveTimeout = 500, // 0.5s
  className,
  defaultValues,
  onSubmit,
  children,
}: FormProps<Values>) => {
  const form = useForm({ defaultValues });
  const { control, formState, handleSubmit, reset } = form;

  const watched = useWatch({
    control,
    defaultValue: defaultValues as DeepPartialSkipArrayKey<Values>,
    disabled: !autoSave,
  });

  const submitForm = useDebounceCallback(
    (values: Values) => onSubmit?.(values),
    autoSaveTimeout,
  );

  useDeepCompareEffect(() => {
    if (autoSave && formState.isDirty) {
      submitForm(watched as Values);
    }
  }, [watched]);

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <FormProvider {...form}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
